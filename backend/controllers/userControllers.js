import UserModel from '../models/userModel.js';

// / Get All Saved Posts for a User
export const getAllSavedPostsController = async (req, res) => {
  try {
    // $ Get Clerk Id from client session
    const getUser = req.auth();

    // % clerkId not exist
    if (!getUser) {
      return res.status(401).json({ message: 'You are Unauthorized' });
    }

    // % Find User Form UserModel
    const userExist = await UserModel.findOne({
      clerkId: getUser.userId,
    });
    if (!userExist) {
      return res.status(404).json({ message: 'User Not Found' });
    }
    const savedPosts = userExist.savedPosts || [];
    res.status(200).json({ savedPosts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
};

// + Save Post for a User
export const savePostForUserController = async (req, res) => {
  try {
    // $ Get Clerk Id from client session
    const getUser = req.auth();

    // % clerkId not exist
    if (!getUser) {
      return res.status(401).json({ message: 'You are Unauthorized' });
    }

    // % Find User Form UserModel
    const userExist = await UserModel.findOne({ clerkId: getUser.userId });

    if (!userExist) {
      return res.status(404).json({ message: 'User Not Found' });
    }
    // $ Get Post ID from body
    const { postId } = req.body;

    if (!postId) {
      return res.status(400).json({ message: 'Post ID is required' });
    }

    const isPostSaved = userExist.savedPosts.some((post) => post === postId);

    // ~ Logic to save post for the user
    if (isPostSaved) {
      await UserModel.findByIdAndUpdate(
        userExist._id,
        { $pull: { savedPosts: postId } },
        { new: true }
      );

      return res.status(400).json({ message: 'Post is Unsaved Now!' });
    } else {
      await UserModel.findByIdAndUpdate(
        userExist._id,
        { $push: { savedPosts: postId } },
        { new: true }
      );

      console.log(userExist);
      return res.status(400).json({ message: 'Post is Saved Now!' });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
};
