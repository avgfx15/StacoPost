// | import express
import express from 'express';

// ` Configure CategoryRouter
const categoryRouter = express.Router();

// | import Controller
import {
  getAllCategoriesController,
  createCategoryController,
  deleteCategoryController,
} from '../controllers/categoryControllers.js';

// ` Configure Routes
// & Test Route
categoryRouter.get('/test', (req, res) =>
  res.status(200).send('categoryRouter Test!')
);

// / Get All Categories Route
categoryRouter.get('/', getAllCategoriesController);

// + Create Category
categoryRouter.post('/', createCategoryController);

// - Delete Category By Id
categoryRouter.delete('/:categoryId', deleteCategoryController);

// ~ Export categoryRouter
export default categoryRouter;
