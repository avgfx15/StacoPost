// | Import mongoose
import mongoose from 'mongoose';

// ` Declare the Schema of the Mongo model
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

// ~ Export the model
const CategoryModel = mongoose.model('CategoryModels', categorySchema);

export default CategoryModel;
