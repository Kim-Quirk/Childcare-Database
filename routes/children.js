/*
    This is the routes file for our children.
    It directs traffic based on the request (add a child, get all children, find a specific child).
*/

// Initilize our variables
const express = require('express');
const router = express.Router();
const controller = require('../controllers/children.js')

// Add child to database
router.post('/add_child', controller.postSave);

// Find a child via ID
router.get('/find_child', controller.getChild);

// Return all children in database
router.get('/children', controller.getChildren);

// Export our routes
module.exports = router;