import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOccupationService from './../../../services/CreateOccupationService';
import { classToClass } from 'class-transformer';
import UpdateOccupationService from './../../../services/UpdateOccupationService';
import DeleteOccupationService from './../../../services/DeleteOccupationService';

class OccupationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createOccupation = container.resolve(CreateOccupationService)
            const Occupation = await createOccupation.execute(request.body);
            return response.json(classToClass(Occupation))
        } catch (err) {
            return response.status(401).send(err.message);
        }


    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateOccupationService);
            await repo.execute(request.body, id);
            return response.json({ status: 200 })

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteOccupationService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default OccupationController;