const express = require("express");
const { userVerification } = require("../middleware/AuthMiddleware");
const { getSales } = require("../controllers/admin/sales.js");

const router = express.Router();

// Routes
router.post("/", userVerification);
router.get("/sales", getSales);

module.exports.router;
