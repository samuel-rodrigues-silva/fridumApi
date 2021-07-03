import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import MeetingController from '../controllers/MeetingController';
const meetingRouter = Router();
const meetingController = new MeetingController();

meetingRouter.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        follow_id: Joi.string().required(),
        location_id: Joi.string(),
        meeting_time: Joi.number()
    }
}), meetingController.create)

meetingRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), meetingController.fetchBy)

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