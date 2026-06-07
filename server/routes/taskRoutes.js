const express = require("express");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskStats,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/stats", protect, getTaskStats);

router.route("/")
  .post(protect, createTask)
  .get(protect, getTasks);

router.route("/:id")
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;