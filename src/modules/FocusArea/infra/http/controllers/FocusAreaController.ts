import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { FocusArea } from '../../typeorm/entities/FocusArea';

class FocusAreaController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(FocusArea);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
        }
    }
}

export default FocusAreaController;