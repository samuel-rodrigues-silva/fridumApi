import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';
const profileRoutes = Router();
const profileController = new ProfileController();

profileRoutes.post('/', celebrate({
    [Segments.BODY]: {
        work_resume: Joi.string(),
        description: Joi.string(),
        image: Joi.string()
    }
}), profileController.create)

profileRoutes.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), profileController.fetchBy)

export default profileRoutes;