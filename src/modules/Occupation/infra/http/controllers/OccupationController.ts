import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Occupation } from '../../typeorm/entities/Occupation';

class OccupationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Occupation);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
        }
    }
}

export default OccupationController;