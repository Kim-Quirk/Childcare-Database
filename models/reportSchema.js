const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  child_id: {
    type: String,
    required: true,
  },
  report: {
    type: Object,
    default: "N/A",
  },
});

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;