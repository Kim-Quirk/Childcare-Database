/*
    This is the model file for our children.
    It sets of a mongoose schema for our child's information to follow a specific format.
    This format can then be used when uploading new children to our MongoDB database.
*/

// Initilize our variables
const mongoose = require("mongoose");

// Initilize our report schema.
const ChildSchema = new mongoose.Schema({
  // All children require a name that's a string
  name: {
    type: String,
    required: true,
  },
  // All children's allergies are saved as an array
  allergies: {
    type: Array,
    default: ["N/A"],
  },
  // All children's medication info are saved as an array
  rx: {
    type: Array,
    default: ["N/A"],
  },
  // All children's bathroom info are saved as an string
  bathroom: {
    type: String,
    default: "Unknown",
  },
  // All children's bithrdate are saved as an date
  birthday: {
    type: Date,
    required: true,
  },
  // All children's gaurdiands info are saved as an date
  guardians: {
    type: Array,
    default: ["N/A"],
  }
});

// Save our report model
const Child = mongoose.model("Child", ChildSchema);

// Export our model
module.exports = Child;