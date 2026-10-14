import express from 'express';
import pingRouter from './ping.router';
import productRouter from './product.router';
import categoryRouter from './category.router';
import UserRouter from './user.router';
import cartRouter from './cart.router';
import orderRouter from './order.router';

const v1Router = express.Router();



v1Router.use('/ping',  pingRouter);
v1Router.use('/product',  productRouter);
v1Router.use('/category',  categoryRouter);
v1Router.use('/user',  UserRouter);
v1Router.use('/order',  orderRouter);

v1Router.use('/cart', cartRouter)
export default v1Router;