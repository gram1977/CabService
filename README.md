Project Structure:
cabservice/
│
├── backend/
│   ├── src/
│   │   ├── config/          # Database, environment, API keys
│   │   ├── controllers/     # Route handlers (e.g., bookingController.js)
│   │   ├── models/          # Database schemas (Cab, User, Booking)
│   │   ├── routes/          # API endpoints (cabRoutes.js, userRoutes.js)
│   │   │   ├── admin/      # Admin-specific routes
│   │   │   └── customer/   # Customer-specific routes
│   │   ├── services/        # Business logic (pricing, availability, payments)
│   │   ├── middleware/      # Auth, logging, error handling
│   │   ├── utils/           # Helper functions (validators, formatters)
│   │   └── app.js           # Main server entry point
│   ├── tests/               # Unit & integration tests
│   └── package.json
│
├── frontend/
│   ├── public/              # Static assets (images, icons)
│   ├── src/
│   │   ├── components/      # Reusable UI components (CabCard, BookingForm)
│   │   ├── pages/           # Page-level views (Home, BookCab, Profile)
│   │   ├── services/        # API calls (axios/fetch wrappers)
│   │   ├── hooks/           # Custom React hooks (useAuth, useBooking)
│   │   ├── context/         # Global state (AuthContext, BookingContext)
│   │   └── app.js           # Main frontend entry point
│   ├── tests/               # Frontend tests
│   └── package.json
│
├── mobile/                  # Optional React Native / Flutter app
│
├── docs/                    # Documentation (API specs, architecture diagrams)
│
├── scripts/                 # Deployment, build, automation scripts
│
├── .env                     # Environment variables
├── .gitignore
└── README.md
└── CHANGELOG.md
└── SECURITY.md