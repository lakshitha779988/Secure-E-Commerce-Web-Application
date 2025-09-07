# Secure E-Commerce Web Application

## Project Overview

This project is a secure e-commerce web application emphasizing authentication, authorization, and mitigation of OWASP Top 10 vulnerabilities. It consists of a React frontend (Vite) and an Express backend with MongoDB.

### Features

* User registration and login using Auth0 (OIDC)
* View and edit profile information
* Add products to cart and place orders
* View all past and upcoming orders
* Role-based authorization (user/admin)

## Technology Stack

* **Frontend:** React with Vite, HTTPS dev server
* **Backend:** Express.js, HTTPS server, JWT middleware, Auth0 integration
* **Database:** MongoDB with Mongoose
* **Authentication:** Auth0 (OpenID Connect)
* **Security:** HTTPS, token-based authentication, input validation, OWASP Top 10 mitigations

## Project Setup

### Backend Setup (Express + HTTPS)

1. Clone the repository:

```bash
git clone https://github.com/lakshitha779988/Secure-E-Commerce-Web-Application.git
cd Secure-E-Commerce-Web-Application/backend
```

2. Install dependencies:

```bash
npm install
```

3. Generate SSL certificates (self-signed for local development):

```bash
mkdir ssl
cd ssl
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

4. Configure environment variables in `.env` (MongoDB URI, Auth0 keys, etc.)

5. Start the backend server on HTTPS:

```bash
node server.js
```

Backend URL: `https://localhost:8443`

---

### Frontend Setup (React + Vite + HTTPS)

1. Navigate to frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Generate local HTTPS certificates (using mkcert recommended):

```bash
mkcert localhost
# Generates localhost.pem and localhost-key.pem
```

4. Update `vite.config.js` with SSL paths:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./ssl/localhost-key.pem'),
      cert: fs.readFileSync('./ssl/localhost.pem'),
    },
    port: 5173
  }
});
```

5. Add `.env` file:

```env
VITE_API_BASE_URL=https://localhost:8443
```

6. Start React dev server:

```bash
npm run dev
```

Frontend URL: `https://localhost:5173`

---

### Running the Project

1. Backend: `https://localhost:8443`
2. Frontend: `https://localhost:5173`
3. Ensure environment variables are correctly configured for Auth0, MongoDB, and SSL paths.
4. Access the app via browser and register/login using Auth0.

### Security Measures Implemented

* HTTPS enforced for all communication
* JWT token verification with Auth0
* Role-based access control
* Input validation on frontend and backend
* OWASP Top 10 mitigations: Injection, Broken Authentication, Sensitive Data Exposure, Broken Access Control, XSS, CSRF protection

### Folder Structure

```
backend/
 ├─ ssl/
 ├─ routes/
 ├─ models/
 ├─ middleware/
 ├─ server.js
frontend/
 ├─ ssl/
 ├─ src/
 │   ├─ auth/
 │   ├─ hooks/
 │   ├─ pages/
 │   └─ components/
 ├─ vite.config.js
 └─ package.json
```

### GitHub Repository

[Secure E-Commerce Web Application](https://github.com/lakshitha779988/Secure-E-Commerce-Web-Application)

### Conclusion

This project demonstrates secure web application development, including:

* OIDC login and Auth0 integration
* Role-based access control
* HTTPS communication for frontend and backend
* Mitigation of OWASP Top 10 vulnerabilities

It provides a full-stack solution with React, Express, and MongoDB, suitable for learning and further development.
