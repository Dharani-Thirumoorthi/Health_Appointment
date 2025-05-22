const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  time: { type: String, required: true },
  mode: { type: String, required: true },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
