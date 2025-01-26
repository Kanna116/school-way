const mongoose = require("mongoose");

const RiderSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  possibleSchools: [String],
  locationsCovered: [String],
  isVerified: Boolean,
  contact: String,
  vehicleNumber: String,
  image: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/256/4825/4825123.png",
  },
});

const Rider = mongoose.model("Rider", RiderSchema);
module.exports = Rider;
