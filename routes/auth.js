const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Rider = require("../models/rider");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register route
// router.post("/signup", async (req, res) => {
//   const { email, password, role, username } = req.body;

//   try {
//     // Check if the user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists)
//       return res.status(400).json({ message: "User already exists" });

//     // Create a new user
//     const newUser = new User({ email, password, role, username });
//     await newUser.save();

//     res.status(201).json({ message: "User created successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

router.post("/signup", async (req, res) => {
  const { email, password, role, username } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    // Create a new user
    const newUser = new User({ email, password, role, username });
    await newUser.save();

    // If the role is "rider", create rider-specific data
    if (role === "rider") {
      const newRiderData = new Rider({
        username, // Associate rider data with the username
        contact: "", // Placeholder for contact (could be updated later)
        vehicleNumber: "", // Placeholder for vehicle number (could be updated later)
        locationsCovered: [], // Placeholder for locations (could be updated later)
        isVerified: false, // Default to false; can be updated later
      });

      // Save the rider data in the database
      await newRiderData.save();
    }

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: "Invalid email or password" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid email or password" });

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ token, role: user.role, user });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Step 2: Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Step 3: Generate a JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Step 4: If the user is a rider, get the associated rider data
    let riderData = null;
    if (user.role === "rider") {
      riderData = await Rider.findOne({ email: user.email });
    }

    // Step 5: Prepare the response with user data and rider data (if available)
    const responseUser = {
      username: user.username,
      email: user.email,
      role: user.role,
      token,
      _id: user._id,
      riderData: riderData || null, // Include riderData if it's a rider, otherwise null
    };

    res.status(200).json({ user: responseUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  const { id } = req.params; // User ID from URL parameter (e.g., /api/user/update/:id)
  const {
    username,
    email,
    contact,
    vehicleNumber,
    possibleSchools,
    locationsCovered,
  } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user information
    user.username = username || user.username;
    user.email = email || user.email;

    // If the user is a rider, update rider-specific information as well
    if (user.role === "rider") {
      // Find and update rider data
      const riderData = await Rider.findOne({ username: user.username });

      if (riderData) {
        // Update rider data
        riderData.contact = contact || riderData.contact;
        riderData.vehicleNumber = vehicleNumber || riderData.vehicleNumber;
        riderData.possibleSchools =
          possibleSchools || riderData.possibleSchools;
        riderData.locationsCovered =
          locationsCovered || riderData.locationsCovered;

        // Save the updated rider data
        await riderData.save();
      } else {
        // If there's no rider data for this user, create new rider data
        const newRiderData = new Rider({
          username: user.username,
          contact,
          vehicleNumber,
          possibleSchools,
          locationsCovered,
        });
        await newRiderData.save();
      }
    }

    // Save the updated user data
    await user.save();

    // Send the updated user data back in the response
    res.status(200).json({
      updateUser: {
        username: user.username,
        email: user.email,
        role: user.role,
        riderData: {
          contact: user.role === "rider" ? contact : undefined,
          vehicleNumber: user.role === "rider" ? vehicleNumber : undefined,
          possibleSchools: user.role === "rider" ? possibleSchools : undefined,
          locationsCovered:
            user.role === "rider" ? locationsCovered : undefined,
        },
      },
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
});

module.exports = router;
