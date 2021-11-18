import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AcademicFormationController from '../controllers/AcademicFormationController';
import cors from 'cors'
const academicFormationRouter = Router();
const academicFormationController = new AcademicFormationController();


academicFormationRouter.post('/', celebrate({
    [Segments.BODY]: {
        profileId: Joi.string().uuid().required(),
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        image: Joi.string(),
        conclusion_date: Joi.string(),
        institution: Joi.string(),
    }
}), academicFormationController.create)

academicFormationRouter.options('/', cors())
academicFormationRouter.options('/:id', cors())

academicFormationRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        title: Joi.string().min(3),
        description: Joi.string(),
        image: Joi.string(),
        conclusion_date: Joi.string(),
        institution: Joi.string(),
    }
}), academicFormationController.update)

academicFormationRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), academicFormationController.remove)


export default academicFormationRouter;