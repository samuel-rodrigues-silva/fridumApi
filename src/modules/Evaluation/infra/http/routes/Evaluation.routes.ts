import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import EvaluationController from '../controllers/EvaluationController';
const evaluationRoutes = Router();
const evaluationController = new EvaluationController();

evaluationRoutes.post('/', celebrate({
    [Segments.BODY]: {
        service_id: Joi.string().required(),
        description: Joi.string().required(),
        rating: Joi.number().required()
    }
}), evaluationController.create)

export default evaluationRoutes;