import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ChatController from '../controllers/ChatController';
const chatRoutes = Router();
const chatController = new ChatController();

chatRoutes.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        follow_id: Joi.string().required(),
    }
}), chatController.create)

export default chatRoutes;