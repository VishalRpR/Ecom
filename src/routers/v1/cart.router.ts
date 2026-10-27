import express from 'express';
import { createCartHandler, createCartItemHandler, listCartItemsHandler } from '../../controllers/cart.controller';
import { validateRequestBody } from '../../validators';
import { cartItemSchema } from '../../validators/cart.validator';
import authMiddlware from '../../Auth/authMiddlware';

const cartRouter = express.Router();

cartRouter.post('/item',validateRequestBody(cartItemSchema),authMiddlware,createCartItemHandler)// TODO: Resolve this TS compilation issue
cartRouter.get('/',authMiddlware, listCartItemsHandler); // TODO: Resolve this TS compilation issue
cartRouter.post("/:id",authMiddlware,createCartHandler)




export default cartRouter;

