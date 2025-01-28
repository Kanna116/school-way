const express = require("express");
const router = express.Router();
const Rider = require("../models/rider");

router.get("/riders", async (req, res) => {
  const { school, location } = req.query;

  if (!school || !location) {
    return res.status(400).send("School and Location are required parameters.");
  }

  console.log("Searching for riders with school:", school, "and location:", location);

  try {
    const riders = await Rider.find({
      possibleSchools: { $in: [school] },
      locationsCovered: { $in: [location] },
      isVerified: true,
    });

    // Debugging: Log the number of riders found
    console.log("Number of riders found:", riders.length);

    if (riders.length === 0) {
      return res.status(404).send("No riders found for the specified school and location.");
    }

    res.json({ riders });
  } catch (error) {
    console.error("Error fetching riders:", error);
    res.status(500).send("Error fetching riders");
  }
});

module.exports = router;
