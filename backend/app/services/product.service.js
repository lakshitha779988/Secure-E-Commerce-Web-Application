
const Product = require('../models/product.model');

class ProductService {
  // Create new product
  async createProduct(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async getTopSellingProduct() {
    return await Product.find({ isActive: true })
      .sort({ totalSales: -1 }) // sort by totalSales (descending)
      .limit(10) // only top 10
      .populate('category'); // also fetch category details
  }
  // Get all products (with filters, pagination in future)
  async getAllProducts() {
    return await Product.find({ isActive: true }).populate('category');
  }

  // Get single product by id
  async getProductById(id) {
    return await Product.findById(id).populate('category');
  }

  // Update product
  async updateProduct(id, updateData) {
    return await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  }

  // Delete product (soft delete by making inactive OR hard delete)
  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
   
  }
}

module.exports = new ProductService();
