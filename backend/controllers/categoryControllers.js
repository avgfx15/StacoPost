// | Import Category MODEL
import CategoryModel from '../models/categoryModel.js';

// | Import Slugify
import slugify from 'slugify';

// / Get All Categories
export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await CategoryModel.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};

// + Create New Category
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    // Create slug from name
    const slug = slugify(name, {
      replacement: '_',
      remove: undefined,
      lower: true,
      strict: false,
      locale: 'vi',
      trim: true,
    });

    // Check if category already exists
    const existingCategory = await CategoryModel.findOne({
      $or: [{ name: name.toLowerCase() }, { slug }],
    });

    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = new CategoryModel({
      name: name.trim(),
      slug,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ message: 'Failed to create category' });
  }
};

// - Delete Category By Id
export const deleteCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Check if category exists
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Check if category is being used by any posts
    const PostModel = (await import('../models/postModel.js')).default;
    const postsUsingCategory = await PostModel.find({ category: categoryId });

    if (postsUsingCategory.length > 0) {
      return res.status(400).json({
        message: 'Cannot delete category as it is being used by posts',
      });
    }

    await CategoryModel.findByIdAndDelete(categoryId);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Failed to delete category' });
  }
};
