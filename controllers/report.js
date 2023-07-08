/*
    This is the controller file for our reports.
    It directs traffic based on the request (add a report, get all reports, find a specific report).
*/

// Initlize our variables 
const reportModel = require("../models/reportSchema");

// Save a new report to our database
exports.postSave = async (req, res, next) => {
    const report = new reportModel(req.body);
    try {
        await report.save();
        res.send(report);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Find one report via a child's ID
exports.getReport = async (req, res, next) => {
    const { headers } = req;
    const string = headers['child_id'];
    console.log(string);
    const report = await reportModel.find({child_id: string}).exec();
    console.log(report);
    try {
        res.send(report);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Return all reports in database
exports.getReports = async (req, res, next) => {
    const reports = await reportModel.find({});
  
    try {
        res.send(reports);
    } catch (error) {
        res.status(500).send(error);
    }
};