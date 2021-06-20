import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import RoleController from '../controllers/RoleController';
const roleRoutes = Router();
const roleController = new RoleController();

roleRoutes.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), roleController.create)

export default roleRoutes;