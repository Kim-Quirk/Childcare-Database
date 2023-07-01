const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  allergies: {
    type: Array,
    default: ["N/A"],
  },
  rx: {
    type: Array,
    default: ["N/A"],
  },
  bathroom: {
    type: String,
    default: "Unknown",
  },
  birthday: {
    type: Date,
    required: true,
  },
  guardians: {
    type: Array,
    default: ["N/A"],
  }
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;