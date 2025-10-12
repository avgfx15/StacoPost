// | import express

import express from 'express';

// | Import CORS
import cors from 'cors';

// | Import Router
import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';
import commentRouter from './routes/commentRouter.js';

// | Import DB Connect
import dbConnect from './DB/dbConnect.js';
import webHookClerkRouter from './routes/webHookClerk.js';

// | Import clerkMiddleware for authenticate user
import { clerkMiddleware } from '@clerk/express';

// ` Configure App
const app = express();

// ` CORS Middleware
app.use(cors(process.env.CLIENT_URL));
// @ Port Declare
const port = 3000;

// ` Apply `clerkMiddleware()` to all routes
app.use(clerkMiddleware());
// ` Configure webhooks before JSON parsing to get raw body
app.use('/webhooks', webHookClerkRouter);

// ` Configure Middleware For JSON format
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ` Configure middleware router
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use((error, req, res, next) => {
  if (!res.headersSent) {
    res.status(error.status || 500);

    res.json({
      message: error.message || 'Something went wrong!',
      status: error.status || 500,
      stack: error.stack,
      error: error,
      name: error.name,
    });
  }
});

// ` Configure base route
app.get('/', (req, res) => res.status(200).send('Hello World!'));

// ` Configure app lister with port and DB Configure with app start up
app.listen(port, () => {
  try {
    console.log(`Blogpost app listening on port ${port}!`);
    dbConnect();
  } catch (error) {
    console.log(`Error in Blogpost app` + error);
  }
});
