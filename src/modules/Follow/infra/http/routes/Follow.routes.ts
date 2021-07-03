import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import FollowController from '../controllers/FollowController';
const followRouter = Router();
const followController = new FollowController();

followRouter.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        follow_id: Joi.string().required(),
    }
}), followController.create)

followRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), followController.fetchBy)

followRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), followController.update)

followRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), followController.remove)


export default followRouter;