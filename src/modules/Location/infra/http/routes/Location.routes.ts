import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import LocationController from '../controllers/LocationController';
const locationRouter = Router();
const locationController = new LocationController();

locationRouter.post('/', celebrate({
    [Segments.BODY]: {
        longitute: Joi.string().required(),
        latitude: Joi.string().required(),
    }
}), locationController.create)

locationRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), locationController.fetchBy)

locationRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), locationController.create)

locationRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), locationController.update)

locationRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), locationController.remove)

export default locationRouter;