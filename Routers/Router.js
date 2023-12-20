const express = require('express');
const router = express.Router();
//const { renderLandingPage } = require('./controllers/Controller'); // Import the controller function
const { renderLandingPage }  = require('../controllers/Controller');

// Landing page route
router.get('/', renderLandingPage); // Using the controller function to handle the route

module.exports = router;
