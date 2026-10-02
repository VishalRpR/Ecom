import express from 'express';
import pingRouter from './ping.router';
import productRouter from './product.router';
import categoryRouter from './category.router';
import UserRouter from './user.router';

const v1Router = express.Router();



v1Router.use('/ping',  pingRouter);
v1Router.use('/product',  productRouter);
v1Router.use('/category',  categoryRouter);
v1Router.use('/user',  UserRouter);
export default v1Router;