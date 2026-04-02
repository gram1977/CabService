const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} = require("../../controllers/enquiry");

// View all enquiries
router.get("/enquiries", getAllEnquiries);

// Get a single enquiry by ID
router.get("/enquiries/:id", getEnquiryById);

// Create a new enquiry
router.post("/enquiries", createEnquiry);

// Update an enquiry by ID
router.put("/enquiries/:id", updateEnquiry);

// Delete an enquiry by ID
router.delete("/enquiries/:id", deleteEnquiry);

module.exports = router;
