const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
     role: {
      type: String,
      enum: ["admin", "customer"],
      required: true,
      default: "customer",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    /* 
        The address is required only if the user's role is customer
    */
    address: {
      type: String,
      required: function () {
        return this.role === "customer";
      },
      trim: true,
    },

  },
  {
    timestamps: true,
  },
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
