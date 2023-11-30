const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistToken=[];
const registerUser = async (req, res) => {
  const newUser = new User(req.body);

  if (newUser.password !== newUser.confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  if (!newUser.firstname || !newUser.lastname || !newUser.email) {
    return res.status(400).json({ message: 'A required field is missing' });
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const createdUser = await newUser.save();
    if (createdUser) {
      const newUserDetails = {
        'firstName': createdUser.firstname,
        'lastName': createdUser.lastname,
        'email': createdUser.email
      };
      return res.status(201).json({ message: 'User registered successfully', newUserDetails });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Failed to sign in' });
  }
};

const getUserProfile = async (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  if (blacklistToken.includes(token)) {
    return res.status(401).json({ error: 'Token is blacklisted' });
  }

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const userId = decoded.userId;
    const user = await User.findOne({ '_id': userId });
    const userProfile = {
      '_id': userId,
      'firstName': user.firstname,
      'lastName': user.lastname,
      'email': user.email
    };

    res.status(200).json({ userProfile });
  });
};

const logoutUser = (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(400).json({ error: 'Token not provided' });
  }

  blacklistToken.push(token);
  return res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser
};
