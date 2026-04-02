const express = require("express");
const router = express.Router();

const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} = require("../../controllers/service");

// View all services
router.get("/services", getAllServices);

// Get a single service by ID
router.get("/services/:id", getServiceById);

// Create a new service
router.post("/services", createService);

// Update a service by ID
router.put("/services/:id", updateService);

// Delete a service by ID
router.delete("/services/:id", deleteService);

module.exports = router;
