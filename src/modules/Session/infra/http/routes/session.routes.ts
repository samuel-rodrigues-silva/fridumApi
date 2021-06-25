import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import SessionController from '../controllers/SessionController';
const sessionController = new SessionController();

const sessionRouter = Router();

sessionRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), sessionController.create)

sessionRouter.get('/', sessionController.fetchAll);

export default sessionRouter;