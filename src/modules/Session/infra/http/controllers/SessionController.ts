import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Session } from '../../typeorm/entities/Session';

class SessionController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Session);
            const res = await repo.save(request.body,);
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }
}

export default SessionController;