const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

const User = mongoose.model("User", UserSchema);

module.exports = User;