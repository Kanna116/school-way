const mongoose = require("mongoose");

const RiderSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  possibleSchools: [String],
  locationsCovered: [String],
  isVerified: {
    type: Boolean,
    default: true,
  },
  contact: String,
  vehicleNumber: String,
  image: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/256/4825/4825123.png",
  },
});

module.exports = mongoose.model("Rider", RiderSchema);
