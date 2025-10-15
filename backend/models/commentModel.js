import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const commentSchema = new mongoose.Schema(
  {
    commentUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true,
    },
    commentPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PostsModel',
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
