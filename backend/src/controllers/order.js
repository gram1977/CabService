const Order = require("../models/order");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    const toIST = (date) => {
      return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    };
    const ordersWithIST = orders.map((order) => ({
      ...order.toObject(),
      createdAtIST: toIST(order.createdAt),
      updatedAtIST: toIST(order.updatedAt),
    }));
    res.json(ordersWithIST);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    const toIST = (date) => {
      return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    };
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json({
      ...enquiry.toObject(),
      createdAtIST: toIST(enquiry.createdAt),
      updatedAtIST: toIST(enquiry.updatedAt),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: `Order with ID ${req.params.id} updated` });
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ message: `Order with ID ${req.params.id} deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
