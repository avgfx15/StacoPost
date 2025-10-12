// | Import POST MODEL
import PostModel from '../models/postModel.js';
import UserModel from '../models/userModel.js';

// / Get All Posts
export const getAllPostController = async (req, res) => {
  const allPost = await PostModel.find();
  res.status(200).json(allPost);
};

// / Get Single Post By Slug
export const getSinglePostBySlugController = async (req, res) => {
  const slug = req.params.slug;

  const getPostBySlug = await PostModel.findOne({ slug });
  res.status(200).json(getPostBySlug);
};

// + Create New Posts

export const createPostController = async (req, res) => {
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

  // $ De-structure input from client
  const {
    category,
    postImage,
    postTitle,
    slug,
    subTitle,
    content,
    isFeatured,
  } = req.body;

  // @ Declare new Post Data
  const newPost = new PostModel({
    author: userExist._id,
    category,
    postImage,
    postTitle,
    slug,
    subTitle,
    content,
    isFeatured,
  });

  // # Save Post
  const savedPost = await newPost.save();
  res.status(201).json(savedPost);
};

// - Delete Post By Id

export const deletePostController = async (req, res) => {
  // $ Get Clerk Id from client session
  const getUser = req.auth();

  // % clerkId not exist
  if (!getUser) {
    return res.status(401).json({ message: 'You are Unauthorized' });
  }
  console.log(getUser);
  // % Find User Form UserModel
  const userExist = await UserModel.findOne({ clerkId: getUser.userId });

  console.log(userExist);

  if (!userExist) {
    return res.status(404).json({ message: 'User Not Found' });
  }

  // % Get PostId from params
  const postId = req.params.postId;

  // % Find Post By PostId and authorId
  const findPost = await PostModel.findOne({
    _id: postId,
    author: userExist._id,
  });
  console.log(findPost);
  await PostModel.findOneAndDelete({ _id: postId, author: userExist._id });
  res.status(200).json('Post Deleted Successfully!');
};
