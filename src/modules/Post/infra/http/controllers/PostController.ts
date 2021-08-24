import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import { Post } from '../../typeorm/entities/Post';
import CreatePostService from './../../../services/CreatePostService';
import { classToClass } from 'class-transformer';
import ShowPostService from './../../../services/ShowPostService';
import ListPostService from './../../../services/ListPostService';
import UpdatePostService from './../../../services/UpdatePostService';
import DeletePostService from './../../../services/DeletePostService';

class PostController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const {
                user_id,
                description,
                title,
                image,
                price,
                expected_date_of_delivery } = request.body
            const repo = container.resolve(CreatePostService)
            const post = await repo.execute({
                user_id,
                description,
                title,
                image,
                price,
                expected_date_of_delivery
            })
            return response.json(classToClass(post));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async listByCity(request: Request, response: Response): Promise<Response> {
        try {
            const { area } = request.body
            const repo = container.resolve(ListPostService);
            const list = await repo.execute();
            return response.json(classToClass(list));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const repo = container.resolve(ShowPostService)
            const post = repo.execute(id);
            return response.json(classToClass(post))
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { user_id,
                description,
                title,
                image,
                price,
                expected_date_of_delivery } = request.body
            const repo = container.resolve(UpdatePostService);
            const post = await repo.execute({
                user_id,
                description,
                title,
                image,
                price,
                expected_date_of_delivery
            }, id);
            return response.json(classToClass(post));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const repo = container.resolve(DeletePostService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default PostController;