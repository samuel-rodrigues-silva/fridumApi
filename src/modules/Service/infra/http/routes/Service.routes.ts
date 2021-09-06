import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
const serviceRouter = Router();
const serviceController = new ServiceController();

serviceRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), serviceController.fetchById)

serviceRouter.get('/:id/follow', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), serviceController.fetchByFollowId)


serviceRouter.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().uuid().required(),
        postId: Joi.string().uuid().allow(null),
        followId: Joi.string().uuid().allow(null),
        status: Joi.string().required(),
        finished_at: Joi.string().allow(null)
    }
}), serviceController.create)

serviceRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        status: Joi.string(),
        finished_at: Joi.string().allow(null)
    }
}), serviceController.update)

serviceRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), serviceController.remove)


export default serviceRouter;