const Ride = require("../models/Ride");

const createRide = async (req, res) => {
  try {
    const ride = await Ride.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json(ride);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getRides = async (req, res) => {
  try {
    const rides = await Ride.find({
      user: req.user._id,
    });

    res.status(200).json(rides);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!ride) {
      return res.status(404).json({
        message: "Ride not found",
      });
    }

    res.status(200).json(ride);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({
        message: "Ride not found",
      });
    }

    await ride.deleteOne();

    res.status(200).json({
      message: "Ride deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRide,
  getRides,
  updateRide,
  deleteRide,
};