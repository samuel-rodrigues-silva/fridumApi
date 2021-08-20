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

profileRoutes.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid(),
    },
    [Segments.BODY]: {
        work_resume: Joi.string(),
        image: Joi.string(),
        description: Joi.string(),
    }
}), profileController.update);

export default profileRoutes;