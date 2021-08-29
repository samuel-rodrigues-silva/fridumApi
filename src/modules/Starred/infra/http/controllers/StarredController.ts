import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateStarredService from './../../../services/CreateStarredService';
import { classToClass } from 'class-transformer';
import DeleteStarredService from './../../../services/DeleteStarredService';

class StarredController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createStarred = container.resolve(CreateStarredService)
            const starred = await createStarred.execute(request.body);
            return response.json(classToClass(starred))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeleteStarredService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default StarredController;