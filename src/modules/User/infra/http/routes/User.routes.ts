import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UserController from '../controllers/UserController';
const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), userController.fetchBy)

userRoutes.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().min(3).required(),
        birthDate: Joi.string().required(),
        document: Joi.string().required(),
        city: Joi.string().required(),
        district: Joi.string().required(),
        street: Joi.string().required(),
        phNumber: Joi.string().required(),
    }
}), userController.create)

userRoutes.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), userController.fetchBy)

userRoutes.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), userController.fetchBy)


export default userRoutes;