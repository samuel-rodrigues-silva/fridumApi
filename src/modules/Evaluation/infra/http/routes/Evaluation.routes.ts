import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import EvaluationController from '../controllers/EvaluationController';
const evaluationRouter = Router();
const evaluationController = new EvaluationController();


evaluationRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
}), evaluationController.list)

evaluationRouter.post('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        serviceId: Joi.string().required(),
        description: Joi.string().required(),
        rating: Joi.number().required()
    }
}), evaluationController.create)

evaluationRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), evaluationController.update)

evaluationRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), evaluationController.remove)


export default evaluationRouter;