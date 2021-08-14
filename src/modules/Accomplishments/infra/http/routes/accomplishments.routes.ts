import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AccomplishmentController from '../controllers/AccomplishmentController';
const accomplishmentRouter = Router();
const accomplishmentController = new AccomplishmentController();

accomplishmentRouter.post('/', celebrate({
    [Segments.BODY]: {
        id: Joi.string().uuid(),
        user_id: Joi.string().uuid().required(),
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), accomplishmentController.create)

accomplishmentRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), accomplishmentController.fetchBy)

accomplishmentRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), accomplishmentController.update)

accomplishmentRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), accomplishmentController.remove)


export default accomplishmentRouter;