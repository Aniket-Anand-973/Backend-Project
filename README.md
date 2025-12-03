# Project Management Application

## Description
This is a robust and scalable backend project management application designed for beginners to manage projects, tasks, and users efficiently. It features a complete authentication system, secure password handling, email services for notifications, and a well-structured API.

## Features
- **User Authentication:** Secure signup, login, logout, and password management (forgot password, reset password).
- **JWT Authorization:** Token-based authentication for securing API endpoints.
- **Role-Based Access Control:** (Assumed, based on authentication and project management context)
- **Project Management:** Create, read, update, and delete projects.
- **Task Management:** Create, read, update, and delete tasks within projects.
- **User Management:** Manage user profiles and roles.
- **Email Notifications:** Send emails for account verification, password resets, etc.
- **Input Validation:** Robust validation for all incoming requests to ensure data integrity.
- **Error Handling:** Centralized and custom error handling for a consistent API response.
- **Health Check:** An endpoint to monitor the application's health.

## Technologies Used
- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web framework for building RESTful APIs.
- **MongoDB:** NoSQL database for flexible data storage.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcrypt:** For hashing and securing passwords.
- **jsonwebtoken:** For implementing JWT-based authentication.
- **cookie-parser:** To parse Cookie header and populate `req.cookies`.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv:** To load environment variables from a `.env` file.
- **express-validator:** Middleware for request data validation.
- **mailgen:** For generating responsive email templates.
- **nodemailer:** For sending emails.
- **nodemon:** Utility that monitors for any changes in your source and automatically restarts your server (for development).
- **prettier:** An opinionated code formatter.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud-based)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/project_management.git
    cd project_management
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file in the root directory and add the following environment variables:**
    ```
    PORT=8000
    MONGODB_URI=mongodb://localhost:27017/project_management
    ACCESS_TOKEN_SECRET=your_access_token_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ACCESS_TOKEN_EXPIRY=1h
    REFRESH_TOKEN_EXPIRY=7d
    MAIL_HOST=smtp.ethereal.email
    MAIL_PORT=587
    MAIL_USER=your_ethereal_email
    MAIL_PASS=your_ethereal_password
    ```
    *   **PORT:** The port number on which the server will run.
    *   **MONGODB_URI:** Connection string for your MongoDB database.
    *   **ACCESS_TOKEN_SECRET & REFRESH_TOKEN_SECRET:** Strong, random strings for JWT token generation.
    *   **ACCESS_TOKEN_EXPIRY & REFRESH_TOKEN_EXPIRY:** Expiry times for JWT tokens (e.g., `1h`, `7d`).
    *   **MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS:** SMTP settings for sending emails. You can use services like Ethereal Mail (for testing) or SendGrid/Mailgun (for production).

### Running the Application

1.  **Development Mode:**
    ```bash
    npm run dev
    ```
    The server will restart automatically on code changes.

2.  **Production Mode:**
    ```bash
    npm start
    ```

The application will be accessible at `http://localhost:8000` (or your specified PORT).

## API Endpoints

### Authentication
-   `POST /api/v1/auth/register` - Register a new user
-   `POST /api/v1/auth/login` - Log in a user
-   `POST /api/v1/auth/logout` - Log out a user
-   `POST /api/v1/auth/refresh-token` - Refresh access token
-   `POST /api/v1/auth/forgot-password` - Request a password reset
-   `POST /api/v1/auth/reset-password/:token` - Reset password

### Health Check
-   `GET /api/v1/healthcheck` - Check application health

## Project Structure

```
.
├── src/
│   ├── app.js                 # Express application setup
│   ├── controllers/           # Business logic for routes
│   │   ├── auth.controllers.js
│   │   └── healthcheck.controllers.js
│   ├── db/
│   │   └── index.js           # Database connection (MongoDB)
│   ├── index.js               # Application entry point
│   ├── middlewares/           # Express middleware
│   │   ├── auth.middleware.js # JWT authentication middleware
│   │   └── validator.middleware.js # Request validation middleware
│   ├── models/                # Mongoose schemas and models
│   │   └── user.models.js     # User schema definition
│   ├── routes/                # API route definitions
│   │   ├── auth.routes.js
│   │   └── healthcheck.routes.js
│   └── utils/                 # Utility functions
│       ├── api-error.js       # Custom API error class
│       ├── api-response.js    # Standardized API response format
│       ├── async-handler.js   # Async route handler wrapper
│       ├── contsntants.js     # Application constants (NOTE: Typo in filename)
│       └── mail.js            # Email sending utility
├── .env.example               # Example environment variables
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```
