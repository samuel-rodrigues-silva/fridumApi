import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ChatMessageController from '../controllers/ChatMessageController';
const chatMessageRouter = Router();
const chatMessageController = new ChatMessageController();

chatMessageRouter.post('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
        userId: Joi.string().uuid().required(),
        message: Joi.string().required(),
        unread: Joi.bool().allow(null),
    }
}), chatMessageController.create)

chatMessageRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatMessageController.remove)


export default chatMessageRouter;