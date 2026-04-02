const express = require('express');
const router = express.Router();


const {
  loginCustomer,
  createCustomer,
  getCustomerById,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../../controllers/customer");

// Registration (sign up)
router.post('/register', createCustomer);


// Login (sign in)
router.post("/login", loginCustomer);

module.exports = router;
