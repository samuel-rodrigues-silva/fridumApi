import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import FocusAreaController from '../controllers/FocusAreaController';
const focusAreaRoutes = Router();
const focusAreaController = new FocusAreaController();

focusAreaRoutes.post('/', celebrate({
    [Segments.BODY]: {
        bussines: Joi.string().required(),
    }
}), focusAreaController.create)

export default focusAreaRoutes;