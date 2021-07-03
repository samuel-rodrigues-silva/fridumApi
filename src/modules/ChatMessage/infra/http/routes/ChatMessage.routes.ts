import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ChatMessageController from '../controllers/ChatMessageController';
const chatMessageRouter = Router();
const chatMessageController = new ChatMessageController();

chatMessageRouter.post('/', celebrate({
    [Segments.BODY]: {
        chat_id: Joi.string().required(),
        user_id: Joi.string().required(),
        message: Joi.string().required()
    }
}), chatMessageController.create)

chatMessageRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatMessageController.fetchBy)

chatMessageRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatMessageController.update)

chatMessageRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatMessageController.remove)


export default chatMessageRouter;