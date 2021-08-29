import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePostService from './../../../services/CreatePostService';
import { classToClass } from 'class-transformer';
import UpdatePostService from './../../../services/UpdatePostService';
import DeletePostService from './../../../services/DeletePostService';
import ListPostService from './../../../services/ListPostService';
import ShowPostService from './../../../services/ShowPostService';

class PostController {

    public async listByCity(request: Request, response: Response): Promise<Response> {
        try {
            const {area} = request.params
            const post = container.resolve(ListPostService)
            const postList = await post.execute(area);
            return response.json(classToClass(postList))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            const post = container.resolve(ShowPostService)
            const res = await post.execute(request.body);
            return response.json(classToClass(res))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createPost = container.resolve(CreatePostService)
            const Post = await createPost.execute(request.body);
            return response.json(classToClass(Post))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(UpdatePostService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeletePostService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default PostController;