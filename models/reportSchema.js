/*
    This is the model file for our report.
    It sets of a mongoose schema for our reports to follow a specific format.
    This format can then be used when uploading new reports to our MongoDB database.
*/

// Initilize our variables
const mongoose = require("mongoose");

// Initilize our report schema.
const ReportSchema = new mongoose.Schema({
  // All reports require a child_id that's a string
  child_id: {
    type: String,
    required: true,
  },
    // All reports require a report that's an object
  report: {
    type: Object,
    default: "N/A",
    required: true,
  },
});

// Save our report model
const Report = mongoose.model("Report", ReportSchema);

// Export our model
module.exports = Report;