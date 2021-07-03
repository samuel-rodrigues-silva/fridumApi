import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import PostController from '../controllers/PostController';
const postRouter = Router();
const postController = new PostController();

postRouter.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        description: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.string(),
        price: Joi.number().required(),
        expected_date_of_delivery: Joi.number()
    }
}), postController.create)

postRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), postController.fetchBy)

postRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), postController.update)

postRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), postController.remove)

export default postRouter;