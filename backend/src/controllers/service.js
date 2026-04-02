const Service = require("../models/service");

// Create a new service
exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    const toIST = (date) => {
      return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    };
    const servicesWithIST = services.map((service) => ({
      ...service.toObject(),
      createdAtIST: toIST(service.createdAt),
      updatedAtIST: toIST(service.updatedAt),
    }));
    res.json(servicesWithIST);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    const toIST = (date) => {
      return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    };
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json({
      ...service.toObject(),
      createdAtIST: toIST(service.createdAt),
      updatedAtIST: toIST(service.updatedAt),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a service by ID
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a service by ID
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
