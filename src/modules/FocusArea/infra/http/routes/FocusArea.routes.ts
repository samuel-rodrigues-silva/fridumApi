import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import FocusAreaController from '../controllers/FocusAreaController';
const focusAreaRouter = Router();
const focusAreaController = new FocusAreaController();

focusAreaRouter.post('/', celebrate({
    [Segments.BODY]: {
        profileId: Joi.string().required(),
        business: Joi.string().required(),
    }
}), focusAreaController.create)

focusAreaRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        business: Joi.string(),
    }
}), focusAreaController.update)

focusAreaRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), focusAreaController.remove)


export default focusAreaRouter;