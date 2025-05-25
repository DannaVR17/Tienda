const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI_LOCAL;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
