const express = require("express");
const { userVerification } = require("../middleware/AuthMiddleware");

const {
  getUser,
  getDashboardStats,
} = require("../controllers/admin/general.js");

const router = express.Router();

// Routes
router.post("/", userVerification);
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

module.exports.router;
