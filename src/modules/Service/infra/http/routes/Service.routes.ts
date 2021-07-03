import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ServiceController from '../controllers/ServiceController';
const serviceRouter = Router();
const serviceController = new ServiceController();

serviceRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), serviceController.fetchBy)

serviceRouter.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().uuid().required(),
        post_id: Joi.string().uuid().required(),
        follow_id: Joi.string().uuid().required(),
        status: Joi.string().required(),
        finished_at: Joi.number()
    }
}), serviceController.create)

serviceRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), serviceController.update)

serviceRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), serviceController.remove)


export default serviceRouter;