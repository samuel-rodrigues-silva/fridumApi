import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Accomplishment } from '../../typeorm/entities/Accomplishment';

class AccomplishmentController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Accomplishment);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
        }
    }
}

export default AccomplishmentController;