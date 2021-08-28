import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { container } from 'tsyringe';
import { Accomplishment } from '../../typeorm/entities/Accomplishment';
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
            const {id} = request.params;
            const repo = container.resolve(UpdateAccomplishmentService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeleteAccomplishmentService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default AccomplishmentController;