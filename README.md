# CabService

A comprehensive cab booking and management system featuring a React frontend and a Node.js/Express backend.

## 🚀 Project Overview

CabService is a full-stack application designed to streamline the process of booking cabs, managing enquiries, and handling service quotes. It includes dedicated modules for both customers and administrators.

## 📁 Project Structure

```text
CabService/
├── backend/                # Node.js + Express Backend
│   ├── src/
│   │   ├── config/         # Database configuration (MongoDB)
│   │   ├── controllers/    # Request handlers for various entities
│   │   ├── models/         # Mongoose schemas/models
│   │   ├── routes/         # API Route definitions
│   │   │   ├── admin/      # Admin-facing endpoints
│   │   │   └── customer/   # Customer-facing endpoints
│   │   ├── middleware/     # Authentication & validation middleware
│   │   ├── services/       # Business logic layer
│   │   ├── utils/          # Utility functions
│   │   └── app.js          # Express application entry point
│   ├── tests/              # Backend test suites
│   └── package.json        # Backend dependencies & scripts
├── frontend/               # React Frontend
│   ├── public/             # Static assets
│   ├── src/                # React source code
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Page components (Home, Login, Register, etc.)
│   │   ├── App.js          # Root React component
│   │   └── index.js        # Frontend entry point
│   └── package.json        # Frontend dependencies & scripts
├── docs/                   # Documentation and build artifacts
├── scripts/                # Utility scripts
├── CHANGELOG.md            # Version history
├── README.md               # Project documentation
├── SECURITY.md             # Security policy
└── package.json            # Root configuration
```

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- CSS3 (Vanilla)

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Dotenv (Environment management)

## ⚙️ Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gram1977/CabService.git
   cd CabService
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend/` directory and add your MongoDB URI and PORT:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend:**
   ```bash
   cd backend
   node src/app.js
   ```

2. **Start the Frontend:**
   ```bash
   cd frontend
   npm start
   ```

## 📋 Features

- **Customer Module:**
  - Secure Registration & Login
  - Service Discovery
  - Booking Management
  - Profile Management
- **Admin Module:**
  - Booking Oversight
  - Enquiry Management
  - Quote Generation
  - Service Management

## 📄 License

This project is licensed under the terms specified in the repository.

---
*Built with ❤️ for the CabService community.*

The CabService project follows a classic Full-Stack MERN-style architecture (MongoDB, Express, React, Node.js), structured  as a decoupled Monorepo.

  1. Backend Architecture (Node.js & Express)
  The backend is organized using a Layered Pattern (similar to MVC) to separate concerns:

   * Entry Point (app.js): Initializes the server, connects to MongoDB, and applies global middleware (CORS, JSON parsing,
     logging).
   * Routing Layer (src/routes/): Defines the API endpoints. It is logically split into:
       * Admin Routes: Prefixed with /admin, handling management tasks like bookings, services, and enquiries.
       * Customer Routes: Prefixed with /customer, handling user-specific actions like orders and profile.
       * Auth Routes: Handles shared authentication concerns.
   * Controller Layer (src/controllers/): Contains the business logic for each route. It processes incoming requests,
     interacts with the models, and returns JSON responses.
   * Model Layer (src/models/): Defines the data structure and schemas using Mongoose. This acts as the interface for the
     MongoDB database.
   * Configuration (src/config/): Centralizes external connections, specifically database setup in db.js.

  2. Frontend Architecture (React)
  The frontend is a Single Page Application (SPA) built with React:

   * Routing (App.js): Uses react-router-dom to manage navigation. Routes are conditionally rendered based on the user's
     authentication state and role (Admin vs. Customer).
   * State Management: Utilizes React Context API (LoginContext) to handle global application state, such as authentication
     status and user roles, across components without "prop drilling."
   * Component-Based UI: The UI is broken down into modular components like Sidebar, Login, AdminBookings, etc., promoting
     reusability and easier maintenance.
   * Styling: Uses Vanilla CSS (App.css, index.css), keeping the visual layer lightweight.

  3. Architectural Highlights
   * Role-Based Access Control (RBAC): Both the frontend (conditional routing) and backend (separated route files) are
     designed to handle different permissions for Admins and Customers.
   * RESTful API Design: The backend exposes a standard REST API that the frontend consumes via fetch or axios (implied by
     standard React patterns).
   * Decoupling: The frontend and backend are completely separate applications, allowing them to be scaled or deployed
     independently if needed.