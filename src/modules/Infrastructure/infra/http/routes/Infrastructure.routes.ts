import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import InfrastructureController from '../controllers/InfrastructureController';
const infrastructureRouter = Router();
const infrastructureController = new InfrastructureController();

infrastructureRouter.post('/', celebrate({
    [Segments.BODY]: {
        profileId: Joi.string().uuid().required(),
        role: Joi.string().required(),
        company: Joi.string().required(),
        date_in: Joi.string().required(),
        date_out: Joi.string().required()
    }
}), infrastructureController.create)

infrastructureRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        role: Joi.string(),
        company: Joi.string(),
        date_in: Joi.string(),
        date_out: Joi.string()
    }
}), infrastructureController.update)

infrastructureRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), infrastructureController.remove)

export default infrastructureRouter;