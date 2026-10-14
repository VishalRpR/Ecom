import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createUserHandler, listUserHandler, listUsersHandler } from '../../controllers/user.controller';
import { userSchema } from '../../validators/user.validator';
import authMiddlware from '../../Auth/authMiddlware';

const UserRouter = express.Router();

UserRouter.post('/', validateRequestBody(userSchema),authMiddlware,createUserHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/', listUsersHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/:id', listUserHandler); // TODO: Resolve this TS compilation issue



export default UserRouter;