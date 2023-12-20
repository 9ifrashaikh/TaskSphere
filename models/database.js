// database.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://IfraShaikh:jobs%405858@cluster0.odalvo5.mongodb.net/test?retryWrites=true&w=majority";
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
