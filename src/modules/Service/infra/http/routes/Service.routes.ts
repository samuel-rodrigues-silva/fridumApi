import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
const serviceRoutes = Router();
const serviceController = new ServiceController();

serviceRoutes.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), serviceController.create)

export default serviceRoutes;