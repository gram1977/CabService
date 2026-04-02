const mongoose = require('mongoose');

const cabTripSchema = new mongoose.Schema({
    /* 
    The customer field in CabTrip.js stores the ObjectId of a User document. 
    This ObjectId uniquely identifies a user in the User collection.
    */
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  service: {
    type: String,
    required: true,
    enum: ['City Ride', 'Hourly Rental', 'Outstation Trip']
  },
  pickupLocation: {
    type: String,
    required: true,
    trim: true
  },
  dropLocation: {
    type: String,
    required: true,
    trim: true
  },
  tripDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['booked', 'ongoing', 'completed', 'cancelled'],
    default: 'booked'
  }
}, {
  timestamps: true
});

const cabTrip = mongoose.model('cabTrip', cabTripSchema);

module.exports = cabTrip;
