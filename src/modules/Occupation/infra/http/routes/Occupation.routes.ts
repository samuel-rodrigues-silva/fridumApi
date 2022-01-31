import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import OccupationController from '../controllers/OccupationController';
const occupationRouter = Router();
const occupationController = new OccupationController();

occupationRouter.post('/', celebrate({
    [Segments.BODY]: {
        profileId: Joi.string().uuid().required(),
        role: Joi.string().required(),
        company: Joi.string().required(),
        date_in: Joi.string().required(),
        date_out: Joi.string().required()
    }
}), occupationController.create)

occupationRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        role: Joi.string(),
        company: Joi.string(),
        date_in: Joi.string(),
        date_out: Joi.string()
    }
}), occupationController.update)

occupationRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), occupationController.remove)

export default occupationRouter;