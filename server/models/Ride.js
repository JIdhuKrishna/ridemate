const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    distance: {
      type: Number,
      default: 0,
    },

    fuelCost: {
      type: Number,
      default: 0,
    },

    weather: {
      type: String,
      default: "",
    },

    rideDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Planned", "Completed"],
      default: "Planned",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Ride",
  rideSchema
);