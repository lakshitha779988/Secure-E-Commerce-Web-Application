const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

class AuthService {
  async register(userData) {
    const user = new User(userData);
    try {
        await user.save();
    } catch (error) {
        console.log("User registration is faild");
    }

    try {
      const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );  
    } catch (error) {
        console.log("Error with token genaration");
    }
    
    
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );

    return { token, user };
  }
}

module.exports = new AuthService();
