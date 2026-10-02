import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createProductHandler, listProductHandler, listProductsHandler } from '../../controllers/product.controller';
import { hotelSchema } from '../../validators/product.validator';

const productRouter = express.Router();

productRouter.post('/', validateRequestBody(hotelSchema), createProductHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/', listProductsHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/:id', listProductHandler); // TODO: Resolve this TS compilation issue



export default productRouter;