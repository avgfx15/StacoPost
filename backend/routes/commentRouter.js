import express from 'express';
const app = express();
const port = 3000;
const commentRouter = express.Router();

commentRouter.get('/test', (req, res) =>
  res.status(200).send('commentRouter Test!')
);

export default commentRouter;
