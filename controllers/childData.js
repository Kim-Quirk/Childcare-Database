// const mongoose = require('mongoose');

exports.postSave = (req, res, next) => {
        console.log("Save child!");
};

exports.postDelete = (req, res, next) => {
    console.log("Delete child!");
};

exports.getChild = (req, res, next) => {
    console.log("Get child!");
};