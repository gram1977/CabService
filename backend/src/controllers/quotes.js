const Quote = require("../models/quotes");

// Create a new quote
exports.createQuote = async (req, res) => {
    try {
        const quote = await Quote.create(req.body);
        res.status(201).json(quote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all quotes
exports.getAllQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single quote by ID
exports.getQuoteById = async (req, res) => {
    try {
        const quote = await Quote.findById(req.params.id);
        if (!quote) return res.status(404).json({ error: "Quote not found" });
        res.json(quote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a quote by ID
exports.updateQuote = async (req, res) => {
    try {
        const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quote) return res.status(404).json({ error: "Quote not found" });
        res.json(quote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a quote by ID
exports.deleteQuote = async (req, res) => {
    try {
        const quote = await Quote.findByIdAndDelete(req.params.id);
        if (!quote) return res.status(404).json({ error: "Quote not found" });
        res.json({ message: "Quote deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
