require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth");
const RiderRoutes = require("./routes/rider");

// Middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",  // Adjust port if needed
    "http://localhost:5174",  // Adjust port if needed
    "https://schoolway.netlify.app"
  ],
  methods: "GET,POST,PUT,DELETE",  // You can adjust allowed HTTP methods
  credentials: true,  // Allow cookies and credentials (if needed)
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Basic Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/riders", RiderRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
