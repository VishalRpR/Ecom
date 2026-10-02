import express from 'express';
import {  validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';
import { createProductHandler, listProductsHandler } from '../../controllers/product.controller';

const productRouter = express.Router();

productRouter.post('/', validateRequestBody(pingSchema), createProductHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/:id', listProductsHandler); // TODO: Resolve this TS compilation issue


export default productRouter;