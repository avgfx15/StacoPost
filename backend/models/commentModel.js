import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const commentSchema = new mongoose.Schema(
  {
    commentUser: {
      type: Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true,
    },
    commentPost: {
      type: Schema.Types.ObjectId,
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
module.exports = mongoose.model('CommentModel', commentSchema);
