const express = require('express');
const Router = express.Router();

const { renderLandingPage }  = require('../controllers/Controller');

// Landing page route
Router.get('/', renderLandingPage); // Using the controller function to handle the route

module.exports =    Router;
