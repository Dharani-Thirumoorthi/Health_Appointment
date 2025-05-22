const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/book", async (req, res) => {
  try {
    const { name, phone, gender, time, mode } = req.body;

    const newAppointment = new Appointment({
      name,
      phone,
      gender,
      time,
      mode
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment scheduled" });
  } catch (error) {
    console.error("Error saving appointment:", error);
    res.status(500).json({ error: "Failed to schedule appointment" });
  }
});

module.exports = router;
