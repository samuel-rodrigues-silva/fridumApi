import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import EvaluationController from '../controllers/EvaluationController';
const evaluationRouter = Router();
const evaluationController = new EvaluationController();

evaluationRouter.post('/', celebrate({
    [Segments.BODY]: {
        service_id: Joi.string().required(),
        description: Joi.string().required(),
        rating: Joi.number().required()
    }
}), evaluationController.create)

evaluationRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), evaluationController.fetchBy)

evaluationRouter.put('/:id', celebrate({
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