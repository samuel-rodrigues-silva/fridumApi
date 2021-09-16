import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import FollowController from '../controllers/FollowController';
const followRouter = Router();
const followController = new FollowController();

followRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    }
}), followController.list)

followRouter.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().uuid().required(),
        followId: Joi.string().uuid().required(),
    }
}), followController.create)


followRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), followController.remove)


export default followRouter;