import express from 'express';
import {  validateRequestBody } from '../../validators';
import { listOrdersHandler, makeOrderHandler } from '../../controllers/order.controller';
import { orderSchema } from '../../validators/order.validator';

const orderRouter = express.Router();

orderRouter.post('/', validateRequestBody(orderSchema), makeOrderHandler); // TODO: Resolve this TS compilation issue
orderRouter.get('/', listOrdersHandler); // TODO: Resolve this TS compilation issue


export default orderRouter