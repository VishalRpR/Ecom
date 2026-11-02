import express from 'express';
import { createProductHandler, listProductHandler, listProductsHandler } from '../../controllers/product.controller';

import authMiddlware from '../../middlewares/authMiddlware';
import { uploadMiddlware } from '../../middlewares/uploadMiddleware';

const productRouter = express.Router();

productRouter.post('/', authMiddlware  ,uploadMiddlware.single("image"),createProductHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/',listProductsHandler); // TODO: Resolve this TS compilation issue
productRouter.get('/:id', listProductHandler); // TODO: Resolve this TS compilation issue



export default productRouter;

