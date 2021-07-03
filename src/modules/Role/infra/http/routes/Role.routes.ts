import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import RoleController from '../controllers/RoleController';
const roleRouter = Router();
const roleController = new RoleController();

roleRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), roleController.fetchBy)

roleRouter.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
}), roleController.create)

roleRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), roleController.update)

roleRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), roleController.remove)


export default roleRouter;