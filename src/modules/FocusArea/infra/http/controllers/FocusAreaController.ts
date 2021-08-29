import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFocusAreaService from './../../../services/CreateFocusAreaService';
import { classToClass } from 'class-transformer';
import UpdateFocusAreaService from './../../../services/UpdateFocusAreaService';
import DeleteFocusAreaService from './../../../services/DeleteFocusAreaService';

class FocusAreaController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createFocusArea = container.resolve(CreateFocusAreaService)
            const focusArea = await createFocusArea.execute(request.body);
            return response.json(classToClass(focusArea))
        } catch (err) {
            return response.status(401).send(err.message);
        }


    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(UpdateFocusAreaService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeleteFocusAreaService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default FocusAreaController;