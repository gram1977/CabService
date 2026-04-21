const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/login");

// Login route
router.post("/login", loginUser);
// Register route
router.post("/register", registerUser);



module.exports = router;
