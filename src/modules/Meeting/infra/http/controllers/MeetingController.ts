import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateMeetingService from './../../../services/CreateMeetingService';
import { classToClass } from 'class-transformer';
import UpdateMeetingService from './../../../services/UpdateMeetingService';
import DeleteMeetingService from './../../../services/DeleteMeetingService';
import ListMeetingService from '../../../services/ListMeetingService';

class MeetingController {

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const listMeeting = container.resolve(ListMeetingService)
            const meeting = await listMeeting.execute(id);
            return response.json(classToClass(meeting))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const createMeeting = container.resolve(CreateMeetingService)
            const Meeting = await createMeeting.execute(request.body, id);
            return response.json(classToClass(Meeting))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateMeetingService);
            await repo.execute(request.body, id);
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteMeetingService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default MeetingController;