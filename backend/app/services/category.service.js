const Category = require("../models/category.model");

class CategoryService {
  async createCategory(data) {
    const category = new Category(data);
    return await category.save();
  }

  async getAllCategories() {
    return await Category.find({ isActive: true }).sort({ sortOrder: 1 });
  }

  async getCategoryById(id) {
    return await Category.findById(id);
  }

  async updateCategory(id, updateData) {
    return await Category.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteCategory(id) {
    return await Category.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
  }
}

module.exports = new CategoryService();
