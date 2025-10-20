// | import express
import express from 'express';

// ` Configure PostRouter
const postRouter = express.Router();

// | import Controller
import {
  createPostController,
  deletePostController,
  featurePostController,
  getAllPostController,
  getSinglePostBySlugController,
} from '../controllers/postControllers.js';
import increaseVisit from '../middleware/increaseVisit.js';

// ` Configure Routes
// & Test Route
postRouter.get('/test', (req, res) => res.status(200).send('postRouter Test!'));

// / Get All Post Route
postRouter.get('/', getAllPostController);

// / Get Single Post By Slug
postRouter.get('/:slug', increaseVisit, getSinglePostBySlugController);

// + Create Post
postRouter.post('/', createPostController);

// - Delete Post By Id
postRouter.delete('/:postId', deletePostController);

// + Feature the post
postRouter.patch('/feature', featurePostController);

// ~ Export postRouter
export default postRouter;
