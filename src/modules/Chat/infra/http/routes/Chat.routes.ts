import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ChatController from '../controllers/ChatController';
const chatRouter = Router();
const chatController = new ChatController();

chatRouter.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().uuid().required(),
        followId: Joi.string().uuid().required(),
        serviceId: Joi.string().uuid().required()
    }
}), chatController.create)

chatRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatController.fetchById)

chatRouter.get('/:id/messagesCount', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatController.fetchChatsTotalMessagesUnread)

chatRouter.get('/:id/messages', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatController.show)

chatRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatController.remove)

export default chatRouter;