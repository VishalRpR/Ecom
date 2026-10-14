<<<<<<< HEAD
import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createUserHandler, listUserHandler, listUsersHandler } from '../../controllers/user.controller';
import { userSchema } from '../../validators/user.validator';
import authMiddlware from '../../Auth/authMiddlware';

const UserRouter = express.Router();

UserRouter.post('/', validateRequestBody(userSchema),authMiddlware,createUserHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/', listUsersHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/:id', listUserHandler); // TODO: Resolve this TS compilation issue



=======
import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createUserHandler, listUserHandler, listUsersHandler } from '../../controllers/user.controller';
import { userSchema } from '../../validators/user.validator';

const UserRouter = express.Router();

UserRouter.post('/', validateRequestBody(userSchema), createUserHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/', listUsersHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/:id', listUserHandler); // TODO: Resolve this TS compilation issue



>>>>>>> origin/master
export default UserRouter;