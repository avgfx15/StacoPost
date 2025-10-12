// | Import POST MODEL
import PostModel from '../models/postModel.js';

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
  // $ De-structure input from client
  const {
    author,
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
    author,
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
  const postId = req.params.postId;
  await PostModel.findByIdAndDelete(postId);
  res.status(200).json('Post Deleted Successfully!');
};
