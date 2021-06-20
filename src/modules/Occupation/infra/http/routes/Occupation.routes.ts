import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import OccupationController from '../controllers/OccupationController';
const occupationRoutes = Router();
const occupationController = new OccupationController();

occupationRoutes.post('/', celebrate({
    [Segments.BODY]: {
        role: Joi.string().required(),
        company: Joi.string().required(),
        date_in: Joi.number().required(),
        date_out: Joi.number().required()
    }
}), occupationController.create)

export default occupationRoutes;