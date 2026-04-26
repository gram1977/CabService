const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/login");

// Login route
router.post("/login", (req, res, next) => {
  console.log(
    "[LOGIN ROUTE] Full URL:",
    req.protocol + "://" + req.get("host") + req.originalUrl,
  );
  return loginUser(req, res, next);
});
// Register route
router.post("/register", (req, res, next) => {
  console.log(
    "[LOGIN ROUTE] Full URL:",
    req.protocol + "://" + req.get("host") + req.originalUrl,
  );
  return registerUser(req, res, next);
});

module.exports = router;
