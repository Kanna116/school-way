const express = require("express");
const router = express.Router();
const Rider = require("../models/rider");

router.get("/riders", async (req, res) => {
  const { school, location } = req.query;
  try {
    const riders = await Rider.find({
      possibleSchools: school, // This matches if 'school' exists anywhere in the 'possibleSchools' array
      locationsCovered: location, // This matches if 'location' exists anywhere in the 'locationsCovered' array
      isVerified: true,
    });

    res.json({ riders });
  } catch (error) {
    res.status(500).send("Error fetching riders");
  }
});

module.exports = router;
