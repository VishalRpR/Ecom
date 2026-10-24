import express from 'express';
import {  validateRequestBody } from '../../validators';
import { authenticateUserHandler, createUserHandler, listUserByEmailHandler, listUsersHandler } from '../../controllers/user.controller';
import { userSchema } from '../../validators/user.validator';
import authMiddlware from '../../Auth/authMiddlware';

const UserRouter = express.Router();

UserRouter.post('/', validateRequestBody(userSchema),createUserHandler); // TODO: Resolve this TS compilation issue
UserRouter.get('/', listUsersHandler); // TODO: Resolve this TS compilation issue
// UserRouter.get('/:id', listUserHandler); // TODO: Resolve this TS compilation issue

UserRouter.post('/email', authMiddlware,listUserByEmailHandler); 
UserRouter.post('/authenticate', authenticateUserHandler); 

export default UserRouter;