import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';
const profileRoutes = Router();
const profileController = new ProfileController();

profileRoutes.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string()
    }
}), profileController.create)

export default profileRoutes;