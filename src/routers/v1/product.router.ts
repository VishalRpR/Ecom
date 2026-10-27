import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createProductHandler, listProductHandler, listProductsHandler } from '../../controllers/product.controller';
import { productSchema } from '../../validators/product.validator';
import authMiddlware from '../../Auth/authMiddlware';

const productRouter = express.Router();

productRouter.post('/', validateRequestBody(productSchema), authMiddlware  ,createProductHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/',listProductsHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/:id', listProductHandler); // TODO: Resolve this TS compilation issue



export default productRouter;

