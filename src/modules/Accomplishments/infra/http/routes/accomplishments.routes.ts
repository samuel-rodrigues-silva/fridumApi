import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AccomplishmentController from '../controllers/AccomplishmentController';
const accomplishmentRoutes = Router();
const accomplishmentController = new AccomplishmentController();

accomplishmentRoutes.get('/', accomplishmentController.fetchAll)

accomplishmentRoutes.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), accomplishmentController.create)

export default accomplishmentRoutes;