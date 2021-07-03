import { celebrate, Joi, Segments } from 'celebrate';
import { id } from 'date-fns/locale';
import { Router } from 'express';
import StarredController from '../controllers/StarredController';
const starredRoutes = Router();
const starredController = new StarredController();

starredRoutes.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}))

starredRoutes.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().uuid().required(),
        post_id: Joi.string().uuid().required(),
    }
}), starredController.create)

starredRoutes.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), starredController.update)

starredRoutes.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), starredController.remove)


export default starredRoutes;