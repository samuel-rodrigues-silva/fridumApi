import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFollowService from './../../../services/CreateFollowService';
import { classToClass } from 'class-transformer';
import DeleteFollowService from './../../../services/DeleteFollowService';

class FollowController {

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
            const {id} = request.params;
            const repo = container.resolve(DeleteFollowService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default FollowController;