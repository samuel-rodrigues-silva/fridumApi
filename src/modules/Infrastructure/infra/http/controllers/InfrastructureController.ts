import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateInfrastructureService from './../../../services/CreateInfrastructureService';
import { classToClass } from 'class-transformer';
import UpdateInfrastructureService from './../../../services/UpdateInfrastructureService';
import DeleteInfrastructureService from './../../../services/DeleteInfrastructureService';

class InfrastructureController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createInfrastructure = container.resolve(CreateInfrastructureService)
            const infrastructure = await createInfrastructure.execute(request.body);
            return response.json(classToClass(infrastructure))
        } catch (err) {
            return response.status(401).send(err.message);
        }


    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateInfrastructureService);
            await repo.execute(request.body, id);
            return response.json({ status: 200 })

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteInfrastructureService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default InfrastructureController;