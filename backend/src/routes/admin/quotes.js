const express = require("express");
const router = express.Router();

const {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
} = require("../../controllers/quotes");

// View all quotes
router.get("/quotes", getAllQuotes);

// Get a single quote by ID
router.get("/quotes/:id", getQuoteById);

// Create a new quote
router.post("/quotes", createQuote);

// Update a quote by ID
router.put("/quotes/:id", updateQuote);

// Delete a quote by ID
router.delete("/quotes/:id", deleteQuote);

module.exports = router;
