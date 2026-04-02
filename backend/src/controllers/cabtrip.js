/*  
CabTrip: This is the model class imported from your Mongoose schema (../models/cabtrip). 
It is used to interact with the cab trips collection in your MongoDB database. 
It provides methods like create, find, findById, findByIdAndUpdate methods etc of class CabTrip.
*/
const CabTrip = require("../models/cabtrip");

// Create a new cab trip
exports.createCabTrip = async (req, res) => {
  try {
    /*
		abTrip (lowercase c): This is a variable that holds the result of creating a new cab trip document 
		in the database. 
		In const cabTrip = await CabTrip.create(req.body);, 
		cabTrip is a single document (an instance of the CabTrip model) that was just created and saved.  
		*/
    const cabTrip = await CabTrip.create(req.body);
    res.status(201).json(cabTrip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all cab trips
exports.getAllCabTrips = async (req, res) => {
  try {
    /*  
		This line fetches all cab trip entries from the database and stores them in the cabTrips array.
		It uses the CabTrip model to query the database for all cab trip documents.
		CabTrip.find() returns a promise that resolves to an array of all cab trip records in the collection.
		The result (an array of cab trip objects) is stored in the cabTrips variable.
		*/
    const cabTrips = await CabTrip.find();
    res.json(cabTrips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single cab trip by ID
exports.getCabTripById = async (req, res) => {
  try {
    /*  
	 	This line fetches a single cab trip from the database by its unique ID. 
	  */
    const cabTrip = await CabTrip.findById(req.params.id);
    if (!cabTrip) return res.status(404).json({ error: "CabTrip not found" });
    res.json(cabTrip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a cab trip by ID
exports.updateCabTrip = async (req, res) => {
  try {
    /*  
	  This line finds a cab trip by ID, updates it with new data, and returns the updated document.
	  Uses the CabTrip model to find a cab trip document in the database by its unique ID (from req.params.id).
		Updates that document with the data provided in req.body.
		The { new: true } option makes sure the updated document (after changes) is returned.
		The result is stored in the cabTrip variable. If no document is found, cabTrip will be null.
	  */
    const cabTrip = await CabTrip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cabTrip) return res.status(404).json({ error: "CabTrip not found" });
    res.json(cabTrip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a cab trip by ID
exports.deleteCabTrip = async (req, res) => {
	try {
    /*  
		This line finds a cab trip by ID, deletes it from the database, and returns the deleted document.
		Uses the CabTrip model to find a cab trip document in the database by its unique ID (from req.params.id).
		Deletes that document from the database.
		The deleted document (if found and deleted) is returned and stored in the cabTrip variable. If no document is found, cabTrip will be null.
	  */
    const cabTrip = await CabTrip.findByIdAndDelete(req.params.id);
    if (!cabTrip) return res.status(404).json({ error: "CabTrip not found" });
    res.json({ message: "CabTrip deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
