import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Evaluation } from '../../typeorm/entities/Evaluation';

class EvaluationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Evaluation);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
        }
    }
}

export default EvaluationController;