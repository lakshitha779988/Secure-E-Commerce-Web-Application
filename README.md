# Secure E-Commerce Web Application

This repository contains a secure e-commerce web application built with the MERN stack, Auth0 authentication, and modern security best practices.

## Project Overview

The application allows authenticated users to:

* Securely login and logout via Auth0.
* View their profile including name, email, and profile picture.
* Browse products stored in MongoDB.
* Add products to a cart.
* Place orders with details such as purchase date, delivery time slot, address, product name and quantity, and a custom message.
* View past and upcoming orders tied to their account.

All API requests are protected using JWT access tokens issued by Auth0.

## Technology Stack

* **Frontend:** React with Vite
* **Backend:** Express.js with Node.js
* **Database:** MongoDB (Mongoose ORM)
* **Authentication & Authorization:** Auth0 (OIDC & JWTs)
* **Media Storage:** Cloudinary for product images

## Security Measures

1. **Authentication & Authorization**

   * OIDC via Auth0 for login/logout.
   * Express middleware (`express-jwt`) verifies JWT tokens.
   * Endpoints validate `req.user` to ensure users access only their own data.

2. **HTTPS & Secure Config**

   * Environment variables store Auth0, MongoDB, and Cloudinary credentials.
   * Secrets are excluded from version control.
   * Frontend communicates securely with backend via HTTPS.

3. **OWASP Top 10 Mitigation**

   * **Injection:** Mongoose with query parameter binding.
   * **Broken Authentication:** Auth0 handles login; no custom password storage.
   * **Sensitive Data Exposure:** HTTPS and `.env` for secrets.
   * **Broken Access Control:** Endpoints validate `req.user.sub`.
   * **XSS:** React escapes inputs; backend sanitizes messages.
   * **CSRF Protection:** Stateless APIs using Bearer tokens.

## Backend Setup (Express.js + MongoDB)

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Run the server:

```bash
npm run dev
```

Server runs on `http://localhost:5000/`

### Backend Features

* REST APIs for products, cart, and orders.
* Middleware (`checkJwt`, `attachUser`) for authentication.
* Mongoose schemas with validation.
* Cloudinary integration for secure product images.

## Frontend Setup (React + Vite)

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173/`

### Frontend Features

* React Router for page navigation.
* Auth0 authentication with `@auth0/auth0-react` and custom `Auth0ProviderWithHistory`.
* API requests include Bearer tokens.
* Form validation for dates, time slots, and quantities.

## Database (MongoDB)

* Collections: `users`, `products`, `orders`, `carts`.
* Unique email index enforced on `users`.
* Proper schema design linking users to their orders.

## Environment Variables (.env)

Create a `.env` file in the root directory with the following:

```env
AUTH0_DOMAIN=your-tenant.us.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_AUDIENCE=http://localhost:5000/api
MONGODB_URI=mongodb://localhost:27017/icecream_store_db
CLOUDINARY_URL=cloudinary://your-api-key:secret@cloud-name
```



## Running the Project

1. Clone the repository:

```bash
git clone https://github.com/lakshitha779988/Secure-E-Commerce-Web-Application
```

2. Configure `.env` with your credentials.
3. Start backend and frontend servers as described above.


