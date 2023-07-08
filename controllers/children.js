/*
    This is the controller file for our children.
    It directs traffic based on the request (add a child, get all children, find a specific child).
*/

// Initlize our variables 
const childModel = require("../models/childSchema");

// Save a new child to our database
exports.postSave = async (req, res, next) => {
    const child = new childModel(req.body);
    try {
        await child.save();
        res.send(child);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Find one child via ID
exports.getChild = async (req, res, next) => {
    const { headers } = req;
    const id = headers['id'];
    console.log(id);
    const child = await childModel.findById(id);
    try {
        res.send(child);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Return all children in database
exports.getChildren = async (req, res, next) => {
    const children = await childModel.find({});
  
    try {
        res.send(children);
    } catch (error) {
        res.status(500).send(error);
    }
};