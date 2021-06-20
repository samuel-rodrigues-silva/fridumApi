import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import LocationController from '../controllers/LocationController';
const locationRoutes = Router();
const locationController = new LocationController();

locationRoutes.post('/', celebrate({
    [Segments.BODY]: {
        longitute: Joi.string().required(),
        latitude: Joi.string().required(),
    }
}), locationController.create)

export default locationRoutes;