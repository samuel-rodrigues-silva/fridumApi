import "reflect-metadata"
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAccomplishmentService from './../../../services/CreateAccomplishmentService';
import { classToClass } from 'class-transformer';
import UpdateAccomplishmentService from './../../../services/UpdateAccomplishmentService';
import DeleteAccomplishmentService from './../../../services/DeleteAccomplishmentService';

class AccomplishmentController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createAccomplishment = container.resolve(CreateAccomplishmentService)
            const accomplishment = await createAccomplishment.execute(request.body);
            return response.json(classToClass(accomplishment))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateAccomplishmentService);
            await repo.execute(request.body, id);
            return response.json({ status: 200 })
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteAccomplishmentService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default AccomplishmentController;