const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key
const blacklistToken = []; // Array to store blacklisted tokens

const authenticateUser = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  if (blacklistToken.includes(token)) {
    return res.status(401).json({ error: 'Token is blacklisted' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = { id: decoded.userId };
    next();
  });
};

module.exports = authenticateUser;
