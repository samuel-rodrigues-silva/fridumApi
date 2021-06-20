import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import PostController from '../controllers/PostController';
const postRoutes = Router();
const postController = new PostController();

postRoutes.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        description: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.string(),
        price: Joi.number().required(),
        expected_date_of_delivery: Joi.number()
    }
}), postController.create)

export default postRoutes;