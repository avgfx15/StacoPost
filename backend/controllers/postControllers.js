import PostModel from '../models/postModel.js';

// / Get All Posts
export const getAllPostController = async (req, res) => {
  try {
    const allPost = await PostModel.find();
    res.status(200).json(allPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// / Get Single Post By Slug
export const getSinglePostBySlugController = async (req, res) => {
  try {
    const slug = req.params.slug;

    const getPostBySlug = await PostModel.findOne({ slug });
    res.status(200).json(getPostBySlug);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// + Create New Posts

export const createPostController = async (req, res) => {
  try {
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
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
};
