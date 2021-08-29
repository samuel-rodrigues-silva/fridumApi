import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateEvaluationService from './../../../services/CreateEvaluationService';
import { classToClass } from 'class-transformer';
import UpdateEvaluationService from './../../../services/UpdateEvaluationService';
import DeleteEvaluationService from './../../../services/DeleteEvaluationService';

class EvaluationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params
            const createEvaluation = container.resolve(CreateEvaluationService)
            const evaluation = await createEvaluation.execute(request.body, id);
            return response.json(classToClass(evaluation))
        } catch (err) {
            return response.status(401).send(err.message);
        }

    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(UpdateEvaluationService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeleteEvaluationService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default EvaluationController;