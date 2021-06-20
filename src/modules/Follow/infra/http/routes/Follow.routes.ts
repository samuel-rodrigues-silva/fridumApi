import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import FollowController from '../controllers/FollowController';
const followRoutes = Router();
const followController = new FollowController();

followRoutes.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        follow_id: Joi.string().required(),
    }
}), followController.create)

export default followRoutes;