import express from 'express';
const app = express();
const port = 3000;
const postRouter = express.Router();

postRouter.get('/test', (req, res) => res.status(200).send('postRouter Test!'));

export default postRouter;
