import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AccomplishmentController from '../controllers/AccomplishmentController';
const accomplishmentRouter = Router();
const accomplishmentController = new AccomplishmentController();

accomplishmentRouter.post('/', celebrate({
    [Segments.BODY]: {
        profileId: Joi.string().uuid().required(),
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), accomplishmentController.create)

accomplishmentRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        title: Joi.string().min(3),
        description: Joi.string(),
        image: Joi.string()
    }
}), accomplishmentController.update)

accomplishmentRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), accomplishmentController.remove)


export default accomplishmentRouter;