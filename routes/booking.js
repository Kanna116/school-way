const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Rider = require("../models/rider");
const User = require("../models/user"); // Assuming you have a User model

router.post("/booking-rider", async (req, res) => {
  const {
    userId,
    riderId,
    pricing,
    startDate,
    endDate,
    numberOfPeople,
    location,
    school,
  } = req.body;

  if (!userId || !riderId || !pricing || !numberOfPeople) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Check if the user and rider exist
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const rider = await Rider.findById(riderId);
    if (!rider) {
      return res.status(404).send("Rider not found.");
    }

    // Create the booking
    const newBooking = new Booking({
      user: userId,
      rider: riderId,
      pricing,
      startDate,
      endDate,
      numberOfPeople,
      location,
      school,
    });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking created successfully!", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).send("Error creating booking.");
  }
});

module.exports = router;
