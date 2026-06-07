const express = require("express");

const {
  createRide,
  getRides,
  updateRide,
  deleteRide,
} = require("../controllers/rideController");

const {
  protect,
} = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(protect, createRide)
  .get(protect, getRides);

router
  .route("/:id")
  .put(protect, updateRide)
  .delete(protect, deleteRide);

module.exports = router;