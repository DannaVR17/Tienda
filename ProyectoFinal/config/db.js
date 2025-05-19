const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI_LOCAL;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
