const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({

 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Order items (snapshot of cart at purchase time)
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: String, // Store product name at time of purchase
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    total: {
      type: Number,
      required: true
    }
  }],
  
  // Pricing breakdown
  subtotal: {
    type: Number,
    required: true
  },
  
  shippingCost: {
    type: Number,
    default: 0
  },

  
  totalAmount: {
    type: Number,
    required: true
  },
  
  // Shipping information
  shippingAddress: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: String
  },
  
  // Order status tracking
  status: {
    type: String,
    enum: {
      values: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
      message: 'Invalid order status'
    },
    default: 'pending'
  },
  
  // Payment information
  paymentMethod: {
    type: String,
    enum: ['card', 'cash_on_delivery'],
    required: true
  },
  
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  
  paymentId: String,
  
  // Tracking information
  trackingNumber: String,
  
  // Important dates
  orderDate: {
    type: Date,
    default: Date.now
  },
  
  shippedDate: Date,
  deliveredDate: Date,
  
  // Order notes
  notes: String,
  adminNotes: String // Only visible to admin
  
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});



// Method to update order status
orderSchema.methods.updateStatus = function(newStatus, adminNotes = '') {
  this.status = newStatus;
  if (adminNotes) this.adminNotes = adminNotes;
  
  // Set dates based on status
  if (newStatus === 'shipped' && !this.shippedDate) {
    this.shippedDate = new Date();
  } else if (newStatus === 'delivered' && !this.deliveredDate) {
    this.deliveredDate = new Date();
  }
  
  return this.save();
};

// Virtual for checking if order can be cancelled
orderSchema.virtual('canBeCancelled').get(function() {
  return ['pending', 'confirmed'].includes(this.status);
});

// Index for better query performance
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ status: 1 });



module.exports = mongoose.model('Order', orderSchema);