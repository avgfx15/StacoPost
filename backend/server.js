import express from 'express';
import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';
import commentRouter from './routes/commentRouter.js';
import dbConnect from './DB/dbConnect.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.get('/', (req, res) => res.status(200).send('Hello World!'));
app.listen(port, () => {
  try {
    console.log(`Blogpost app listening on port ${port}!`);
    dbConnect();
  } catch (error) {
    console.log(`Error in Blogpost app` + error);
  }
});
