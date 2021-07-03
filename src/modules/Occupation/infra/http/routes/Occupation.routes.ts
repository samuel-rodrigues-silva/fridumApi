import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import OccupationController from '../controllers/OccupationController';
const occupationRouter = Router();
const occupationController = new OccupationController();

occupationRouter.post('/', celebrate({
    [Segments.BODY]: {
        role: Joi.string().required(),
        company: Joi.string().required(),
        date_in: Joi.number().required(),
        date_out: Joi.number().required()
    }
}), occupationController.create)

occupationRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), occupationController.fetchBy)

occupationRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), occupationController.update)

occupationRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), occupationController.remove)

export default occupationRouter;