import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Meeting } from '../../typeorm/entities/Meeting';

class MeetingController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Meeting);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
        }
    }
}

export default MeetingController;