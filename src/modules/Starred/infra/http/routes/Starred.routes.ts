import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import StarredController from '../controllers/StarredController';
const starredRoutes = Router();
const starredController = new StarredController();

starredRoutes.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), starredController.create)

export default starredRoutes;