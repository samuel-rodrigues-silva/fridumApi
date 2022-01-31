import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import PostController from '../controllers/PostController';
import multer from 'multer';
import multerConfig from '../../../../../../config/multer';
const postRouter = Router();
const postController = new PostController();
const upload = multer(multerConfig);

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
        userId: Joi.string().uuid(),
        city: Joi.string(),
        state: Joi.string(),
        description: Joi.string(),
        title: Joi.string(),
        image: Joi.any().allow(null),
        price: Joi.string(),
        expected_date_of_delivery: Joi.date()
    }
}), upload.single('img'), postController.create)

postRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        city: Joi.string(),
        state: Joi.string(),
        description: Joi.string(),
        title: Joi.string(),
        image: Joi.any().allow(null),
        price: Joi.string(),
        expected_date_of_delivery: Joi.date()
    }
}), upload.single('img'), postController.update)

postRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), postController.remove)

export default postRouter;