import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import SessionController from '../controllers/SessionController'
import verifyAuth from './../middlewares/verifyAuth';
const sessionController = new SessionController()

const sessionRouter = Router()

sessionRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), verifyAuth, sessionController.fetchBy)

sessionRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required()
    }
}), sessionController.fetchByEmail)

sessionRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        userId: Joi.string().uuid().required()
    }
}), sessionController.create)

sessionRouter.post('/auth', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), sessionController.auth)

sessionRouter.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), sessionController.update)

sessionRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), verifyAuth, sessionController.remove)

export default sessionRouter