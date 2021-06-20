import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ChatMessageController from '../controllers/ChatMessageController';
const chatMessageRoutes = Router();
const chatMessageController = new ChatMessageController();

chatMessageRoutes.post('/', celebrate({
    [Segments.BODY]: {
        chat_id: Joi.string().required(),
        user_id: Joi.string().required(),
        message: Joi.string().required()
    }
}), chatMessageController.create)

export default chatMessageRoutes;