// | Import mongoose
import mongoose, { Schema } from 'mongoose'; // Erase if already required

// ` Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'UserModels',
      required: false, // Temporarily make this optional for testing
    },
    category: {
      type: String,
      required: true,
      // type: Schema.Types.ObjectId,
      // ref: 'CategoryModel',
      // required: true,
    },
    postImage: {
      type: String,
    },
    postTitle: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    subTitle: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visitorsNo: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ~ Export the model
const PostModel = mongoose.model('PostModels', postSchema);

export default PostModel;
