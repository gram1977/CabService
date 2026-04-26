/*  
app.js: backend server entry point. It loads environment variables, connects to the database, 
sets up the Express server, applies middleware, and mounts your admin and customer routes.
*/

// Load environment variables from .env file
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});
const cors = require("cors");

// Set up Express server
const express = require("express");
const app = express();

// In backend/src/app.js, import and call connectDB at the top:
const connectDB = require("./config/db");
connectDB();

console.log("Loaded PORT:", process.env.PORT);
const PORT = process.env.PORT;

//Set up CORS
app.use(cors());

// CORS configuration: Allow requests from frontend (http://localhost:3001)
app.use(
  cors({
    origin: [
      "http://localhost:3001", // or the port your frontend runs on
      "https://main.d1ce1f8g8j1xi9.amplifyapp.com", //for AWS Amplify deployment
    ], 
  }),
);

//Middleware: built-in middleware: Parse JSON bodies (as sent by API clients)
app.use(express.json());

//Middleware: custom middleware: Logging middleware (to see all requests in the console)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//Routes:
app.get("/", (req, res) => {
  res.send("Cab Service API is running");
});

// Mount login routes
app.use("/api/auth", require("./routes/auth"));

/* 
admin routes: you mount each admin router with app.use('/admin', ...). 
This means all routes defined in those routers will be prefixed with /admin.
*/

app.use("/admin", require("./routes/admin/bookings"));
app.use("/admin", require("./routes/admin/services"));
app.use("/admin", require("./routes/admin/enquiries"));
app.use("/admin", require("./routes/admin/quotes"));

//customer routes:
app.use("/customer", require("./routes/customer/auth"));
app.use("/customer", require("./routes/customer/orders"));
app.use("/customer", require("./routes/customer/services"));
app.use("/customer", require("./routes/customer/profile"));

/*  
Middleware: custom middleware: Error handling middleware: catch-all 404 handler
Returns JSON for API requests, HTML for others
*/
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    res.status(404).json({ message: 'API route not found' });
  } else {
    res.status(404).send(`
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    `);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  console.log("Available Routes:");
  console.log("============HOME====================");
  console.log(`http://localhost:${PORT}`);

  console.log(`

POST http://localhost:${PORT}/api/login/register --Create New User registration
  body:
  {
  "email": "admin@example.com",
  "password": "admin",
  "role": "admin"
  }

POST http://localhost:${PORT}/api/login --Login user
  body:
  {
    "email": "admin@example.com",
    "password": "admin"
  }
    
  
POST http://localhost:${PORT}/customer/login --Create New Customer login
	http://localhost:${PORT}/customer/login
	{"message":"customer: login page user!"}
	

POST http://localhost:${PORT}/customer/register --Create New Customer registration
	body:
	{
		"role": "admin",
		"name": "Admin User",
		"email": "admin@example.com",
		"password": "adminpassword"
	}

POST http://localhost:${PORT}/admin/bookings/cabtrip --Create a new booking
{
"customer": "69c9236908ba91030356fcf2", // ObjectId of the customer
"service": "City Ride",
"pickupLocation": "69, college road, civil lines, ludhiana",
"dropLocation": "railway station, ludhiana",
"tripDate": "2026-03-29T10:00:00.000Z", // ISO date string
"price": 500,
"status": "booked"
}


POST http://localhost:${PORT}/customer/orders --Create new customer booking
{
  "customer": "69c9236908ba91030356fcf2",
  "trips": ["69c2a8373d9d0de9aee553e9"],
  "totalAmount": 150.0,
  "paymentStatus": "pending",
  "orderStatus": "placed",
  "paymentMethod": "cash"
}	



GET http://localhost:${PORT}/customer/orders --List all cab bookings

GET http://localhost:${PORT}/customer/orders/69c945c10feb678271415977 --List all cab bookings by id
	
	============ADMIN API-enquiry====================
POST http://localhost:${PORT}/customer/enquiries --Create new customer enquiry
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "I would like to know more about your cab services."
}


GET http://localhost:${PORT}/admin/enquiries -List all cab services


PUT http://localhost:${PORT}/admin/enquiries/69ce62a6f9a95fbf50702ae7 -Update service with :id

{
  "name": "Amandeep S. Greval",
  "email": "aman.greval@gmail.com",
  "phone": "9999080593"
}



PUT http://localhost:${PORT}/customer/orders/69c945c10feb678271415977 --Update booking with :id

{
  "paymentStatus": "refunded"
}	

DELETE http://localhost:${PORT}/customer/orders/69c9236908ba91030356fcf2 --Delete booking with :id


*****admin****
GET http://localhost:${PORT}/admin/bookings/cabtrip --List all cab bookings


POST http://localhost:${PORT}/admin/bookings/cabtrip --Create a new booking
{
"customer": "69c9236908ba91030356fcf2", // ObjectId of the customer
"service": "City Ride",
"pickupLocation": "70, college road, civil lines, ludhiana",
"dropLocation": "railway station, ludhiana",
"tripDate": "2026-03-30T10:00:00.000Z", // ISO date string
"price": 500,
"status": "booked"
}

PUT http://localhost:${PORT}/admin/bookings/cabtrip/69c9298908ba91030356fcf4 --Update new booking with :id
{
"dropLocation":"100 railway station, ludhiana"
}	


DELETE http://localhost:${PORT}/admin/bookings/cabtrip/69c2a8373d9d0de9aee553e9 --Delete booking with :id

******services*****

GET http://localhost:${PORT}/customer/services --List all customer services

GET http://localhost:${PORT}/admin/services --List of services

POST http://localhost:${PORT}/admin/services --Create new service
{
  "name": "City Ride",
  "description": "A quick ride within the city.",
  "price": 250,
  "category": "standard",
  "isActive": true
}

GET http://localhost:${PORT}/admin/services/69ca37332eb5042f94d8dffc --Get service by id

PUT http://localhost:${PORT}/admin/services/69ce4b2a1b4be0865ec1a648 --Update service with :id
{
    "price": 1500
}


DELETE http://localhost:${PORT}/admin/services/69ce4b2a1b4be0865ec1a648 --Delete service with :id

`);
});
