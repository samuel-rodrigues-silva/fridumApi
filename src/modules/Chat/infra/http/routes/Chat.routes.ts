import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ChatController from '../controllers/ChatController';
const chatRouter = Router();
const chatController = new ChatController();

chatRouter.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().required(),
        followId: Joi.string().required(),
    }
}), chatController.create)

// chatRouter.get('/:id', celebrate({
//     [Segments.PARAMS]: {
//         id: Joi.string().uuid().required()
//     }
// }), chatController.fetchById)

chatRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), chatController.remove)

export default chatRouter;