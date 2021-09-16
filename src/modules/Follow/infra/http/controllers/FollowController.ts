import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFollowService from './../../../services/CreateFollowService';
import { classToClass } from 'class-transformer';
import DeleteFollowService from './../../../services/DeleteFollowService';
import ListFollowService from '../../../services/ListFollowService';

class FollowController {

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const createFollow = container.resolve(ListFollowService)
            const follow = await createFollow.execute(id);
            return response.json(classToClass(follow))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createFollow = container.resolve(CreateFollowService)
            const follow = await createFollow.execute(request.body);
            return response.json(classToClass(follow))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteFollowService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default FollowController;