import CommentModel from '../models/commentModel.js';

// / Get All Comments By Post ID
export const getAllCommentsByPostIdController = async (req, res) => {
  try {
    const { postId } = req.params;

    // ~ Logic to get comments by postId from the database
    // For example:
    const comments = await CommentModel.find({ postId })
      .populate('commentUser', 'username avatar')
      .populate('commentPost', 'postTitle')
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
};

// + Create Comment For a Post
export const createCommentForPostController = async (req, res) => {
  try {
    // $ Get Clerk Id from client session
    const getUser = req.auth();
    console.log(getUser);
    const { postId } = req.params;
    const { commentDesc } = req.body;
    const commentUser = req.user._id; // Assuming user ID is available in req.user

    // ~ Logic to create a new comment for the post
    const newComment = new CommentModel({
      commentUser,
      commentPost: postId,
      commentDesc,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
};

// - Delete Comment By ID
export const deleteCommentByIdController = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    // Check if the user is the owner of the comment or has admin rights
    if (comment.commentUser.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: 'Unauthorized to delete this comment' });
    }
    await CommentModel.findByIdAndDelete(commentId);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
};
