import { celebrate, Joi, Segments } from 'celebrate';
import { id } from 'date-fns/locale';
import { Router } from 'express';
import StarredController from '../controllers/StarredController';
const starredRoutes = Router();
const starredController = new StarredController();

starredRoutes.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().uuid().required(),
        postId: Joi.string().uuid().required(),
    }
}), starredController.create)

starredRoutes.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), starredController.remove)


export default starredRoutes;