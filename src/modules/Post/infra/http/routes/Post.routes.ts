import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import PostController from '../controllers/PostController';
const postRouter = Router();
const postController = new PostController();

postRouter.get('/city/:area', celebrate({
    [Segments.PARAMS]: {
        area: Joi.string().min(10).required()
    }
}), postController.listByCity)

postRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), postController.fetchBy)

postRouter.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().uuid().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        description: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.string(),
        price: Joi.number().required(),
        expected_date_of_delivery: Joi.date()
    }
}), postController.create)

postRouter.patch('/:id', celebrate({
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