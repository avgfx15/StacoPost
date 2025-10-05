import express from 'express';
const app = express();
const port = 3000;
const userRouter = express.Router();

userRouter.get('/test', (req, res) => res.status(200).send('UserRouter Test!'));

export default userRouter;
