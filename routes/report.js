//save result. delete. view
const express = require('express');
const router = express.Router();

const controller = require('../controllers/report.js')

// add a new report to the database
router.post('/add_report', controller.postSave);

// Return all reports from database
router.get('/get_reports', controller.getReports);

// Search for reports via user ID
router.get('/find_report', controller.getReport);

module.exports = router;