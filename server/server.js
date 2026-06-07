const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");
const rideRoutes = require(
  "./routes/rideRoutes"
);

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

// Task Routes
app.use("/api/tasks", taskRoutes);

// Ride Routes
app.use("/api/rides", rideRoutes);

app.get("/", (req, res) => {
  res.send("RideMate API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});