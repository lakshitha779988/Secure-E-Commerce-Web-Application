const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxLength: [100, 'Product name cannot exceed 100 characters']
  },
  
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  
  imageUrlList: [{
    type: String,
    required: true,
    validate: {
      validator: function(url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(url);
      },
      message: 'Please provide a valid image URL'
    }
  }],
  
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Product category is required']
  },
  
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxLength: [2000, 'Description cannot exceed 2000 characters']
  },
  
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxLength: [200, 'Short description cannot exceed 200 characters']
  },


  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  
 
  isActive: {
    type: Boolean,
    default: true // Controls if product is visible to customers
  },
  
  inStock: {
    type: Boolean,
    default: function() {
      return this.stock > 0;
    }
  },

  
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
    
  },
  
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],

  
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative']
  }, 
  
  discountPercentage: {
    type: Number,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot exceed 100%'],
    default: 0
  },

  
  averageRating: {
    type: Number,
    min: [0, 'Rating cannot be negative'],
    max: [5, 'Rating cannot exceed 5'],
    default: 0
  },
  
  totalReviews: {
    type: Number,
    default: 0
  },


  
  totalSales: {
    type: Number,
    default: 0 
  },
  
  views: {
    type: Number,
    default: 0 
  }

}, {
  timestamps: true,
  
  
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


productSchema.virtual('finalPrice').get(function() {
  if (this.discountPercentage > 0) {
    return this.price - (this.price * this.discountPercentage / 100);
  }
  return this.price;
});


productSchema.virtual('onSale').get(function() {
  return this.discountPercentage > 0;
});


productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 }); 
productSchema.index({ averageRating: -1 }); 
productSchema.index({ createdAt: -1 });
productSchema.index({ slug: 1 }); 


productSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }
  next();
});


productSchema.pre('save', function(next) {
  this.inStock = this.stock > 0;
  next();
});

module.exports = mongoose.model('Product', productSchema);