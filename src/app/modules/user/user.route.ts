import express from 'express';
import { UserContoller } from './user.controller';
import ValidateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/createUser',
  ValidateRequest(UserValidation.createUserZodSchema),
  UserContoller.createUser
);

export const UserRoutes = router;
