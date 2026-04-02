const express = require("express");
const router = express.Router();

const {
  getAllServices,
  getServiceById,
} = require("../../controllers/service");

const {
  getAllQuotes,
  getQuoteById,
  createQuote,
} = require("../../controllers/quotes");

const {
  createEnquiry,
} = require("../../controllers/enquiry");

// View available services
router.get("/services", getAllServices);

// Get a single service by ID
router.get("/services/:id", getServiceById);

// Get all quotes
router.get("/quotes", getAllQuotes);

// Get a single quote by ID
router.get("/quotes/:id", getQuoteById);

// Create a new quote
router.post("/quotes", createQuote);

// Submit enquiry
router.post("/enquiries", createEnquiry);

module.exports = router;
