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

router.get("/get-current-bookings/:id", async (req, res) => {
  const { id } = req.params; // the id is either a userId or riderId depending on the query
  const { role } = req.query; // assuming you pass the 'role' in the query to specify if it's a user or rider

  if (!role || (role !== "user" && role !== "rider")) {
    return res.status(400).send("Role must be either 'user' or 'rider'.");
  }

  try {
    let bookings;

    if (role === "user") {
      // Fetch all bookings for a specific user
      bookings = await Booking.find({ user: id, status: "completed" }) // Exclude completed bookings
        .populate("rider", "username school locationsCovered") // You can populate additional rider details as needed
        .populate("user", "username email"); // Optionally populate user details
    } else if (role === "rider") {
      // Fetch all bookings for a specific rider
      bookings = await Booking.find({
        rider: id,
        status: "completed",
      })
        .populate("rider", "username school locationsCovered")
        .populate("user", "username email");
    }

    if (!bookings || bookings.length === 0) {
      return res.status(404).send("No current bookings found.");
    }

    res.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).send("Error fetching bookings.");
  }
});

module.exports = router;
