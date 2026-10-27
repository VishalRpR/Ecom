import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createCategoryHandler, listCategoriesHandler } from '../../controllers/cetegory.controller';
import { categorySchema } from '../../validators/category.validator';
import authMiddlware from '../../Auth/authMiddlware';

const categoryRouter = express.Router();

categoryRouter.post('/', validateRequestBody(categorySchema),authMiddlware, createCategoryHandler); // TODO: Resolve this TS compilation issue
categoryRouter.get('/', listCategoriesHandler); // TODO: Resolve this TS compilation issue
categoryRouter.get('/:id',authMiddlware, createCategoryHandler); // TODO: Resolve this TS compilation issue



export default categoryRouter;