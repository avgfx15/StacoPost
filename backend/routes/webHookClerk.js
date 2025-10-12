// | Import express
import express from 'express';
import { clerkWebHookController } from '../controllers/clerkWebHookController.js';

import bodyParser from 'body-parser';

// ` Configure WebHookClerk Router
const webHookClerkRouter = express.Router();

// ` Configure Routes
// & Test Route
webHookClerkRouter.get('/test', (req, res) =>
  res.status(200).send('webHookClerkRouter Test!')
);

webHookClerkRouter.post(
  '/clerk',
  bodyParser.raw({ type: 'application/json' }),
  clerkWebHookController
);

// ~ Export webHookClerkRouter
export default webHookClerkRouter;
