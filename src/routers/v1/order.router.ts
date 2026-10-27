import express from 'express';
import {  validateRequestBody } from '../../validators';
import { listOrdersHandler, makeOrderHandler } from '../../controllers/order.controller';
import { orderSchema } from '../../validators/order.validator';
import authMiddlware from '../../Auth/authMiddlware';

const orderRouter = express.Router();

orderRouter.post('/', validateRequestBody(orderSchema),authMiddlware,makeOrderHandler); // TODO: Resolve this TS compilation issue
orderRouter.get('/',authMiddlware, listOrdersHandler); // TODO: Resolve this TS compilation issue


export default orderRouter