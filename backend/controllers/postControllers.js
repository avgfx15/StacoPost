// | Import POST MODEL
import PostModel from '../models/postModel.js';
import UserModel from '../models/userModel.js';
import CategoryModel from '../models/categoryModel.js';

// | Import Slugify
import slugify from 'slugify';

// | Import striptags
import striptags from 'striptags';

// | Import ImageKit
import ImageKit from 'imagekit';

// | Import dotenv Module
import dotenv from 'dotenv';
dotenv.config({ override: true });

// / Upload Auth Using ImageKit

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGEKIT_END_POINT,
});

export const uploadAuthController = async (req, res) => {
  try {
    const result = imageKit.getAuthenticationParameters();

    res.status(200).json(result);
  } catch (error) {
    console.error('Error generating authentication parameters:', error);
    res
      .status(500)
      .send({ error: 'Failed to generate authentication parameters' });
  }
};

// / Get All Posts
export const getAllPostController = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 5;

  const allPost = await PostModel.find()
    .populate('author', 'username email profileImage')
    .populate('category', 'name slug')
    .limit(limit)
    .skip((page - 1) * 5)
    .sort({ createdAt: -1 });

  const totalPosts = await PostModel.countDocuments();
  const hasMore = page * limit < totalPosts;
  const totalPages = Math.ceil(totalPosts / limit);
  res.status(200).json({
    allPost,
    nextCursor: hasMore ? page + 1 : null,
    totalPages,
    totalPosts,
    hasMore,
  });
};

// / Get Single Post By Slug
export const getSinglePostBySlugController = async (req, res) => {
  const slug = req.params.slug;

  const getPostBySlug = await PostModel.findOne({ slug })
    .populate('author', 'username email')
    .populate('category', 'name slug');
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
  const { category, postImage, postTitle, subTitle, content } = req.body;

  // ` Create SLUG

  let slugTitle = striptags(postTitle)
    .replace(/\([^)]*\)/g, '')
    .trim();

  let slug = slugify(slugTitle, {
    replacement: '_', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  let checkSlugExist = await PostModel.findOne({ slug });

  let counter = 2;
  while (checkSlugExist) {
    slug = `${slugify(slugTitle, {
      replacement: '_',
      remove: undefined,
      lower: true,
      strict: false,
      locale: 'vi',
      trim: true,
    })}-${counter}`;
    checkSlugExist = await PostModel.findOne({ slug });
    counter++;
  }
  // ! End of unique slug code

  // % Check if all fields are provided
  if (!category || !postTitle || !subTitle || !content) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // % Handle category: check if exists, create if not
  let categoryDoc;
  const existingCategory = await CategoryModel.findOne({
    $or: [
      { name: category.toLowerCase() },
      {
        slug: slugify(category, {
          replacement: '_',
          remove: undefined,
          lower: true,
          strict: false,
          locale: 'vi',
          trim: true,
        }),
      },
    ],
  });

  if (existingCategory) {
    categoryDoc = existingCategory;
  } else {
    // Create new category
    const categorySlug = slugify(category, {
      replacement: '_',
      remove: undefined,
      lower: true,
      strict: false,
      locale: 'vi',
      trim: true,
    });

    categoryDoc = new CategoryModel({
      name: category.trim(),
      slug: categorySlug,
    });

    await categoryDoc.save();
  }

  // % Check if postTitle is less than 50 characters
  // if (postTitle.length > 50) {
  //   return res
  //     .status(400)
  //     .json({ message: 'Post Title should be less than 50 characters' });
  // }

  // @ Declare new Post Data
  const newPost = new PostModel({
    author: userExist._id,
    category: categoryDoc._id,
    postImage,
    postTitle,
    slug,
    subTitle,
    content,
  });

  // # Save Post
  const savedPost = await newPost.save();
  res.status(201).json(savedPost);
};

// - Delete Post By Id

export const deletePostController = async (req, res) => {
  // % Get PostId from params
  const postId = req.params.postId;

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

  // $ Check if User is Admin or not
  const isAdmin = getUser.sessionClaims?.metadata?.role === 'admin';
  console.log(isAdmin);

  if (isAdmin) {
    await PostModel.findOneAndDelete({ _id: postId });
    return res.status(200).json('Post Deleted Successfully!');
  }

  // % Find Post By PostId and authorId
  const findPost = await PostModel.findOne({
    _id: postId,
    author: userExist._id,
  });
  console.log(findPost);
  await PostModel.findOneAndDelete({ _id: postId, author: userExist._id });
  res.status(200).json('Post Deleted Successfully!');
};

// + Feature Post By Id
export const featurePostController = async (req, res) => {
  // % Get PostId from params
  const postId = req.body.postId;

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

  // $ Check if User is Admin or not
  const isAdmin = getUser.sessionClaims?.metadata?.role === 'admin';

  if (!isAdmin) {
    return res.status(200).json('You are not authorized to feature this post.');
  }

  // / Find Post By PostId
  const findPost = await PostModel.findOne({ _id: postId });

  if (!findPost) {
    return res.status(404).json('Post not found.');
  }

  // % Check post isFeatured or not
  const isFeatured = findPost.isFeatured;

  // % Toggle isFeatured status
  const updatedPost = await PostModel.findByIdAndUpdate(
    postId,
    { isFeatured: !isFeatured },
    { new: true }
  );

  // Logic to feature the post
  res.status(200).send(updatedPost);
};
