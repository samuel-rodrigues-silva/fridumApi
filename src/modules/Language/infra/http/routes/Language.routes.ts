import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import LanguageController from '../controllers/LanguageController';
const languageRouter = Router();
const languageController = new LanguageController();

languageRouter.post('/', celebrate({
    [Segments.BODY]: {
        profileId: Joi.string().uuid().required(),
        title: Joi.string().required(),
        level: Joi.string().required()
    }
}), languageController.create)

languageRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        title: Joi.string().required(),
        level: Joi.string().required()
    }
}), languageController.update)

languageRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), languageController.remove)


export default languageRouter;