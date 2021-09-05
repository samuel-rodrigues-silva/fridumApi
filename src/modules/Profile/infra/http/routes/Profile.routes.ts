import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';
import multer from 'multer';
import multerConfig from '../../../../../../config/multer';
const profileRoutes = Router();
const profileController = new ProfileController();
const upload = multer(multerConfig)

profileRoutes.get('/', profileController.listAll)

profileRoutes.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), profileController.fetchBy)

profileRoutes.patch('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid(),
    },
    [Segments.BODY]: {
        role: Joi.string(),
        work_resume: Joi.string(),
        image: Joi.string(),
        description: Joi.string(),
    },
}), upload.single('image'), profileController.update);

export default profileRoutes;