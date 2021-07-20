import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import SessionController from '../controllers/SessionController'
const sessionController = new SessionController()

const sessionRouter = Router()

sessionRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), sessionController.fetchBy)

sessionRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), sessionController.create)

sessionRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), sessionController.update)

sessionRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), sessionController.remove)

export default sessionRouter