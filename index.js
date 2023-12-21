
const express = require('express');
const app = express();
const path = require('path');

const Router = require('./Routers/Router');

const { connectDB } = require('./models/database');  

// Connect to MongoDB
connectDB();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the 'views' directory
app.set('views', path.join(__dirname, 'views'));

// Use the router for handling routes
app.use('/', Router);

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
