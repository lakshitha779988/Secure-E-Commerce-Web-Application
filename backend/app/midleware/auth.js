// middleware/auth.js
require('dotenv').config();
const { expressjwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const User = require('../models/user.model'); // Your Mongoose User model
const jwt = require('jsonwebtoken'); // correct package for decode

// 1️⃣ JWT middleware to verify Auth0 access token
const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,          // cache signing key
    rateLimit: true,      // prevent key overload
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

// 2️⃣ Middleware to attach user to req.user and register first-time users
const attachUser = async (req, res, next) => {
  try {
    const tokenString = req.headers['idtoken']?.split(' ')[1];
    console.log("token",tokenString)
    if (!tokenString) return res.status(401).json({ message: 'No token provided' });

    const decoded = jwt.decode(tokenString); // now works correctly
    console.log("decode",decoded);
    if (!decoded?.sub) return res.status(401).json({ message: 'Invalid token' });

    let user = await User.findOne({ email: decoded.email.toLowerCase() });
    console.log("user",user)
    if (!user) {
      user = await User.create({
        firstName: decoded.given_name || 'FirstName',
        lastName: decoded.family_name || 'LastName',
        email: decoded.email,
        role: 'user',
        password: Math.random().toString(36).slice(-8),
      });
    }

    console.log("Addeduser",user)

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth Middleware Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { checkJwt, attachUser };
