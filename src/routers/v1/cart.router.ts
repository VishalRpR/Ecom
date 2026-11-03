import express from 'express';
import { createCartHandler, createCartItemHandler, listCartHandler } from '../../controllers/cart.controller';
import { validateRequestBody } from '../../validators';
import { cartItemSchema } from '../../validators/cart.validator';
import authMiddlware from '../../middlewares/authMiddlware';

const cartRouter = express.Router();

cartRouter.post('/item',validateRequestBody(cartItemSchema),authMiddlware,createCartItemHandler)//  // TODO: Resolve this TS compilation issue

cartRouter.get('/',authMiddlware, listCartHandler); // TODO: Resolve this TS compilation issue

cartRouter.post("/:id",authMiddlware,createCartHandler)




export default cartRouter;

