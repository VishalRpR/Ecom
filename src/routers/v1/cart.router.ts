import express from 'express';
import { createCartHandler, createCartItemHandler, listCartItemsHandler } from '../../controllers/cart.controller';
import { validateRequestBody } from '../../validators';
import { cartItemSchema } from '../../validators/cart.validator';

const cartRouter = express.Router();

cartRouter.post('/item',validateRequestBody(cartItemSchema),createCartItemHandler)// TODO: Resolve this TS compilation issue
cartRouter.get('/', listCartItemsHandler); // TODO: Resolve this TS compilation issue
cartRouter.post("/:id",createCartHandler)




export default cartRouter;

