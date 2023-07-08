/*
    This is the routes file for our reports.
    It directs traffic based on the request (add a report, get all reports, find a specific report).
*/

// Initilize our variables
const express = require('express');
const router = express.Router();
const controller = require('../controllers/report.js')

// add a new report to the database
router.post('/add_report', controller.postSave);

// Return all reports from database
router.get('/get_reports', controller.getReports);

// Search for reports via child's ID
router.get('/find_report', controller.getReport);

// Export our routes
module.exports = router;