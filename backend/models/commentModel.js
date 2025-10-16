import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const commentSchema = new mongoose.Schema(
  {
    commentUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModels',
      required: true,
    },
    commentPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PostModels',
      required: true,
    },
    commentDesc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
const CommentModel = mongoose.model('CommentModels', commentSchema);

export default CommentModel;
