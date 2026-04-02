const express = require("express");
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../../controllers/order");

// View all orders (for demonstration; filter by user in production)
router.get("/orders", getAllOrders);

// Get an order by ID
router.get("/orders/:id", getOrderById);

// Book a service (create order)
router.post("/orders", createOrder);

// Update order
router.put("/orders/:id", updateOrder);

// Cancel own order
router.delete("/orders/:id", deleteOrder);

module.exports = router;
