const reportModel = require("../models/reportSchema");
const mongoose = require('mongoose');

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
    // options = {
    //     _id: id
    // };
    console.log(string);
    const report = await reportModel.find({child_id: string}).exec();
    console.log(report);
    try {
        res.send(report);
    } catch (error) {
        res.status(500).send(error);
    }
};

// exports.getReport = async (req, res, next) => {
//     const { headers } = req;
//     const string = headers['child_id'];
//     // options = {
//     //     _id: id
//     // };
//     console.log(string);
//     const reports = await reportModel.find({});
//     const report = reports.filter(report => report.child_id === string);
//     console.log(report);
//     try {
//         res.send(report);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };


// Return all reports in database
exports.getReports = async (req, res, next) => {
    const reports = await reportModel.find({});
  
    try {
        res.send(reports);
    } catch (error) {
        res.status(500).send(error);
    }
};