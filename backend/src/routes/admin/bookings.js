const express = require("express");
const router = express.Router();

/*  
  This is a destructuring assignment in Node.js that imports (requires) specific functions
  —createCabTrip, getAllCabTrips, updateCabTrip, and deleteCabTrip—from the cabtrip 
  controller module located at ../../controllers/cabtrip. 
  This allows you to use these functions directly in the current file, 
  typically to handle different booking-related operations (like creating, retrieving, updating, and deleting 
  cab trips) in your Express routes.

  These curly braces are the destructuring operator for objects in JavaScript. 
  They tell JavaScript to extract the named properties from the object returned by 
  require("../../controllers/cabtrip") and assign them to variables with the same names. 
  The destructuring operator is located immediately after the const keyword and before the equals sign.
  
  destructuring is taking place on the object returned by require("../../controllers/cabtrip"). 
  The curly braces { createCabTrip, getAllCabTrips, updateCabTrip, deleteCabTrip } 
  extract these specific properties (functions) from the exported object of the cabtrip controller module 
  and assign them to variables with the same names in the current file.
*/
const {
  createCabTrip,
  getAllCabTrips,
  updateCabTrip,
  deleteCabTrip,
} = require("../../controllers/cabtrip");


/* 
  for routes defined in app.js, route handlers for admin to manage bookings
  
*/
// View all bookings/orders
router.get("/bookings/cabtrip", getAllCabTrips);

// Insert a new booking
router.post("/bookings/cabtrip", createCabTrip);

// Update a booking/order
router.put("/bookings/cabtrip/:id", updateCabTrip);

// Cancel a booking/order
router.delete("/bookings/cabtrip/:id", deleteCabTrip);

module.exports = router;
