
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//const { validateToken, blacklistToken } = require('./middlewares/validateToken');
require('dotenv').config()
const app = express();
// app use
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token','userId','user'],
}));
const User = require('./models/user');
// const { auth } = require('./middlewares/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Load routes
const bloodPressureRoutes = require('./routes/bloodPressureRoutes');
const bloodSugarRoutes = require('./routes/bloodSugarRoutes');
const weightBMIRoutes = require('./routes/weightBMIRoutes');
const authRoutes = require('./routes/authRoutes');

secretKey = process.env.SECRET
// database connection
mongoose.set('strictQuery', false);
const blacklistToken = [];
const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb connected: ${connection.connection.host}`);
  }
  catch (error) {
    console.log("Error: ", error);
  }
}

app.get('/', (req, res) => {
  res.status(200).send(`Welcome to my api`);
});


// Routes
app.use('/api', authRoutes);
app.use('/api/bloodPressure', bloodPressureRoutes);
app.use('/api/bloodSugar', bloodSugarRoutes);
app.use('/api/weightBMI', weightBMIRoutes);

// listening port
const PORT = process.env.PORT || 8080;
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
  });
})
