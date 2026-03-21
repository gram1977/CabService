// Import MongoDB connection
//require('./config/db');

// In backend/src/app.js, import and call connectDB at the top:
const connectDB = require('./config/db');
connectDB();

// Set up Express server
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Cab Service API is running');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log("Available Routes:");
    console.log(`GET http://localhost:${PORT}/users- List all users`);
    console.log(
        `GET http://localhost:${PORT}/users/new- Show form to create new user`,
    );
    console.log(
        `POST http://localhost:${PORT}/users- Handle form submission to create new user`,
    );
    console.log(
        `GET http://localhost:${PORT}/users/edit/:id- Show form to edit an existing user`,
    ); 
});
