const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
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
	estimatedPrice: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		enum: ['pending', 'sent', 'accepted', 'rejected'],
		default: 'pending'
	}
}, {
	timestamps: true
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
