import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UserController from '../controllers/UserController';
const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), userController.create)

export default userRoutes;