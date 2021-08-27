import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import LanguageController from '../controllers/LanguageController';
const languageRouter = Router();
const languageController = new LanguageController();

languageRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), languageController.fetchBy)

languageRouter.post('/', celebrate({
    [Segments.BODY]: {
        title: Joi.string().required(),
        description: Joi.string().required()
    }
}), languageController.create)

languageRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), languageController.update)

languageRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), languageController.remove)


export default languageRouter;