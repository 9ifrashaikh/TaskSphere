require('dotenv').config(); // Load environment variables from .env file

const { MongoClient } = require('mongodb');

// Use environment variable for MongoDB URI
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectDB, client };
