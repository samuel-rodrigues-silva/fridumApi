import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import MeetingController from '../controllers/MeetingController';
const meetingRoutes = Router();
const meetingController = new MeetingController();

meetingRoutes.post('/', celebrate({
    [Segments.BODY]: {
        user_id: Joi.string().required(),
        follow_id: Joi.string().required(),
        location_id: Joi.string(),
        meeting_time: Joi.number()
    }
}), meetingController.create)

export default meetingRoutes;