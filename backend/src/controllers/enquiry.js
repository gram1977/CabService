const Enquiry = require("../models/enquiry");

// Create a new enquiry
exports.createEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    const toIST = (date) => {
      return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    };
    const enquiriesWithIST = enquiries.map((enquiry) => ({
      ...enquiry.toObject(),
      createdAtIST: toIST(enquiry.createdAt),
      updatedAtIST: toIST(enquiry.updatedAt),
    }));
    res.json(enquiriesWithIST);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single enquiry by ID
exports.getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    const toIST = (date) => {
      return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    };
    if (!enquiry) return res.status(404).json({ error: "Enquiry not found" });
    res.json({
      ...enquiry.toObject(),
      createdAtIST: toIST(enquiry.createdAt),
      updatedAtIST: toIST(enquiry.updatedAt),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an enquiry by ID
exports.updateEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!enquiry) return res.status(404).json({ error: "Enquiry not found" });
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an enquiry by ID
exports.deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) return res.status(404).json({ error: "Enquiry not found" });
    res.json({ message: "Enquiry deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
