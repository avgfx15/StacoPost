import express from 'express';
import mongoose from 'mongoose';

const postRouter = express.Router();

import PostModel from '../models/postModel.js';
import {
  createPostController,
  getAllPostController,
  getSinglePostBySlugController,
} from '../controllers/postControllers.js';

postRouter.get('/test', (req, res) => res.status(200).send('postRouter Test!'));

postRouter.get('/', getAllPostController);

postRouter.get('/:slug', getSinglePostBySlugController);

postRouter.post('/', createPostController);

export default postRouter;
