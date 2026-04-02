const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    /* 
    The type: mongoose.Schema.Types.ObjectId specifies that each item in the array is an ObjectId.
    ref: 'cabTrip' tells Mongoose these ObjectIds refer to documents in the cabTrip collection.
    */
    trips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cabTrip",
        required: true,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["placed", "confirmed", "completed", "cancelled"],
      default: "placed",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "wallet"],
      default: "cash",
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
