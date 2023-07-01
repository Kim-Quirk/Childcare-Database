const userModel = require("../models/childSchema");
const mongoose = require('mongoose');

exports.postSave = async (req, res, next) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Find one child via ID
exports.getChild = async (req, res, next) => {
    const { headers } = req;
    const id = headers['id'];
    options = {
        _id: id
    };
    console.log(id);
    const user = await userModel.findById(id);
    try {
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Return all children in database
exports.getChildren = async (req, res, next) => {
    const users = await userModel.find({});
  
    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};