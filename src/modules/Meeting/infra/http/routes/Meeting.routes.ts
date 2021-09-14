import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import MeetingController from '../controllers/MeetingController';
const meetingRouter = Router();
const meetingController = new MeetingController();

meetingRouter.post('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        followId: Joi.string().required(),
        meeting_time: Joi.date(),
        street: Joi.string().required(),
        district: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
    }
}), meetingController.create)

meetingRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), meetingController.list)

meetingRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), meetingController.update)

meetingRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), meetingController.remove)


export default meetingRouter;