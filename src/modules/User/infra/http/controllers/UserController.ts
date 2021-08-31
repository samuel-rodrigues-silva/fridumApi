import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';
import ShowUserService from '../../../services/ShowUserService';
import DeleteUserService from './../../../services/DeleteUserService';
import UpdateUserService from './../../../services/UpdateUserService';
import ListUserService from './../../../services/ListUserService';

class UserController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = container.resolve(CreateUserService)
            const user = await repo.execute(request.body);
            return response.json(classToClass(user));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        try {
            const repo = container.resolve(ListUserService);
            const user = await repo.execute();
            return response.json(classToClass(user));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(ShowUserService);
            const user = await repo.execute(id);
            return response.json(classToClass(user));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name,
                birthDate,
                document,
                city,
                district,
                street,
                state,
                phNumber
            } = request.body
            const repo = container.resolve(UpdateUserService);
            const user = repo.execute({
                name,
                birthDate,
                document,
                city,
                district,
                street,
                state,
                phNumber
            }, id);
            return response.json(user);
        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteUserService);
            const res = await repo.execute(id);
            return response.json(res);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default UserController;