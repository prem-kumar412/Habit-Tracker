// Import the Express framework to create a router.
const express = require('express');

// Create an instance of an Express router.
const router = express.Router();

// Import the 'homeController' module which contains route handler functions.
const homeController = require('../controllers/home_controller');

// Log a message indicating that this code is in the router module.
console.log('In router');

// Define routes and their associated route handler functions using the router.

// Handle GET requests to the root path '/' by calling the 'home' function from the 'homeController' module.
router.get('/', homeController.home);

// Handle GET requests to the '/404' path by calling the 'notFound' function from the 'homeController' module.
router.get('/404', homeController.notFound);

// Include routes for the '/users' path by delegating to the 'users' module's router.
router.use('/users', require('./users'));

// Export the router instance to make it available for use in other parts of the application.
module.exports = router;