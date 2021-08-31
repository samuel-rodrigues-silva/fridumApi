import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateServiceService from './../../../services/CreateServiceService';
import { classToClass } from 'class-transformer';
import UpdateServiceService from './../../../services/UpdateServiceService';
import DeleteServiceService from './../../../services/DeleteServiceService';
import ShowServiceService from './../../../services/ShowServiceService';

class ServiceController {

    public async fetchById(request: Request, response: Response): Promise<Response> {
        try {
            const Service = container.resolve(ShowServiceService)
            const res = await Service.execute(request.body);
            return response.json(classToClass(res))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createService = container.resolve(CreateServiceService)
            const Service = await createService.execute(request.body);
            return response.json(classToClass(Service))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateServiceService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteServiceService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default ServiceController;