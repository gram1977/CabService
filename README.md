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
│   │   │   ├── cabtrip.js
│   │   │   ├── customer.js
│   │   │   ├── enquiry.js
│   │   │   ├── login.js
│   │   │   ├── order.js
│   │   │   ├── quotes.js
│   │   │   └── service.js
│   │   ├── middleware/     # Authentication & validation middleware
│   │   ├── models/         # Mongoose schemas/models
│   │   │   ├── cabtrip.js
│   │   │   ├── customer.js
│   │   │   ├── enquiry.js
│   │   │   ├── login.js
│   │   │   ├── order.js
│   │   │   ├── quotes.js
│   │   │   └── service.js
│   │   ├── routes/         # API Route definitions
│   │   │   ├── admin/      # Admin-facing endpoints (bookings, enquiries, quotes, services)
│   │   │   │   ├── bookings.js
│   │   │   │   ├── enquiries.js
│   │   │   │   ├── quotes.js
│   │   │   │   └── services.js
│   │   │   └── customer/   # Customer-facing endpoints (auth, orders, profile, services)
│   │   │       ├── auth.js
│   │   │       ├── orders.js
│   │   │       ├── profile.js
│   │   │       └── services.js
│   │   ├── services/       # Business logic layer
│   │   ├── utils/          # Utility functions
│   │   └── app.js          # Express application entry point
│   ├── tests/              # Backend test suites
│   ├── .env                # Backend environment variables
│   ├── package.json        # Backend dependencies & scripts
│   └── Procfile            # For deployment into AWS (e.g., Heroku, AWS)
├── frontend/               # React Frontend
│   ├── public/             # Static assets
│   ├── src/                # React source code (components in root)
│   │   ├── AdminBookings.js
│   │   ├── AdminEnquiries.js
│   │   ├── AdminQuotes.js
│   │   ├── AdminServices.js
│   │   ├── CustAuth.js
│   │   ├── CustOrders.js
│   │   ├── CustProfile.js
│   │   ├── CustServices.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── App.js          # Root React component
│   │   └── index.js        # Frontend entry point
│   ├── build/              # Production build output
│   ├── .env                # Frontend environment variables
│   ├── package.json        # Frontend dependencies & scripts
│   └── README.md           # Frontend documentation
├── docs/                   # Documentation and build artifacts
├── scripts/                # Utility scripts
├── amplify.yml             # Amplify deployment config
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
     MONGODB_URI=your_mongodb_connection_string from mongodb atlas
     MONGODB_DB=cabservice
     PORT=3000     
     ```


3. **Frontend Setup:**
  ```bash
  cd ../frontend
  npm install
  ```
  - Create a `.env` file in the `frontend/` directory if you need to set environment variables (e.g., REACT_APP_API_URL):
    ```env
    REACT_APP_API_URL=https://api.grewalcabs.in
    Frontend API call to backend node server.
    This URL is from a custom domain created in AWS.

    To run application hosted on AWS run on your browser: https://grewalcabs.in/
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

## 🔑 Login Credentials & User Creation

On the login page, you can create a new user. New users can be either **admin** or **customer** type. After registration, log in with the credentials you created.

**Demo Credentials:**
- **Admin:**
  - Username: `admin@example.com`
  - Password: `admin`
- **Customer:**
  - Username: `aman@example.com`
  - Password: `aman`

You can use these demo accounts or register your own.

## 📋 Features

**Customer Module:**
- Registration & Login (Note: For production, password hashing with bcrypt is recommended for security)
- Order Management (create, view, and manage orders)
- Service Discovery (view available cab services)
- Booking Management (create, view, and manage bookings)
- Profile Management (view and update profile)

**Admin Module:**
- Booking Oversight (view and manage all bookings)
- Enquiry Management (handle customer enquiries)
- Quote Generation (create and manage service quotes)
- Service Management (add, update, and remove services)

**General Features:**
- Role-Based Access Control (RBAC) for Admin and Customer
- RESTful API design
- Decoupled frontend and backend for independent deployment
- Environment-based configuration
- Layered backend architecture (config, routes, controllers, models, services, utils)
- Modern React SPA with Context API for state management


## ☁️ AWS Deployment

### Frontend: Deploy with AWS Amplify

1. **Connect your repository to AWS Amplify:**
  - Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/).
  - Click "Get Started" under "Deploy" and connect your GitHub repository.
  - Select the `frontend/` folder as the root for the build.

2. **Configure build settings:**
  - Amplify will auto-detect React and create a build pipeline.
  - If needed, customize the `amplify.yml` file in the project root for build steps.

3. **Set environment variables:**
  - In the Amplify Console, go to App settings > Environment variables.
  - Add variables such as `REACT_APP_API_URL` to point to your backend API.

4. **Deploy:**
  - Amplify will build and deploy your frontend automatically on each push to the connected branch.

### Backend: Deploy with AWS Elastic Beanstalk


1. **Prepare your backend for deployment:**
  - Copy all files and folders from the `backend/` directory (including `src/`, `package.json`, `.env`, `Procfile`, etc.) into a new folder for packaging.
  - Remove any local files or folders not needed in production (such as `tests/` if not required).

2. **Create a ZIP archive:**
  - Select all contents of your prepared backend folder and compress them into a single ZIP file (do not zip the folder itself, only its contents).

3. **Upload to AWS Elastic Beanstalk:**
  - Go to the [AWS Elastic Beanstalk Console](https://console.aws.amazon.com/elasticbeanstalk/).
  - Create a new application (Platform: Node.js).
  - Create a new environment (Web server environment).
  - Upload your ZIP file when prompted for the application code.

4. **Set environment variables:**
  - In the AWS Console, go to Elastic Beanstalk > your environment > Configuration > Software.
  - Add environment variables such as `MONGODB_URI` and `PORT`.

5. **Update API URL in frontend:**
  - Set `REACT_APP_API_URL` in Amplify to the Elastic Beanstalk backend endpoint.

**References:**
- [AWS Amplify Docs](https://docs.aws.amazon.com/amplify/)
- [AWS Elastic Beanstalk Docs](https://docs.aws.amazon.com/elasticbeanstalk/)

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

## 📊 Visual Folder Structure

A detailed, interactive folder structure is available as a Mermaid chart in [CabService_Folder_Structure.mmd](CabService_Folder_Structure.mmd). You can preview this chart directly in VS Code using a Mermaid extension for a visual overview of the project layout.