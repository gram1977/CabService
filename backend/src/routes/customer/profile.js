const express = require("express");
const router = express.Router();

const {
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../../controllers/customer");

// Get own profile (by ID)
router.get("/profile/:id", getCustomerById);

// Update own profile (by ID)
router.put("/profile/:id", updateCustomer);

// Delete own profile (by ID)
router.delete("/profile/:id", deleteCustomer);

module.exports = router;
