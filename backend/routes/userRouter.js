import express from 'express';
import {
  getAllSavedPostsController,
  savePostForUserController,
} from '../controllers/userControllers.js';
const app = express();
const port = 3000;
const userRouter = express.Router();

userRouter.get('/test', (req, res) => res.status(200).send('UserRouter Test!'));

// / Get All Saved Posts for a User
userRouter.get('/savedposts', getAllSavedPostsController);

userRouter.patch('/savepost', savePostForUserController);

// userRouter.patch('/unSavePost/:postId');

export default userRouter;
