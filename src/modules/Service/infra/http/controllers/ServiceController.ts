import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateServiceService from './../../../services/CreateServiceService';
import { classToClass } from 'class-transformer';
import UpdateServiceService from './../../../services/UpdateServiceService';
import DeleteServiceService from './../../../services/DeleteServiceService';
import ShowServiceService from './../../../services/ShowServiceService';
import ShowFollowServiceService from '../../../services/ShowFollowServiceService';
import ShowUnreadServiceService from '../../../services/ShowUnreadServiceService';
class ServiceController {

    public async fetchById(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const service = container.resolve(ShowServiceService)
            const res = await service.execute(id);
            return response.json(classToClass(res))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async fetchByFollowId(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const service = container.resolve(ShowFollowServiceService)
            const res = await service.execute(id);
            return response.json(classToClass(res))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async fetchUnreadServices(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const service = container.resolve(ShowUnreadServiceService);
            const res = await service.execute(id);
            return response.json(res)
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }


    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createService = container.resolve(CreateServiceService)
            const service = await createService.execute(request.body);
            if (service == null) {
                return response.send('Service already exists')
            }
            return response.json(classToClass(service))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateServiceService);
            const service = repo.execute(request.body, id);
            return response.json({ status: 200 })
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