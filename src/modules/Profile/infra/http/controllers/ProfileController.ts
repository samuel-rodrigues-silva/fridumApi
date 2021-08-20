import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Profile } from '../../typeorm/entities/Profile';
import { getConnection } from 'typeorm';
import { classToClass } from 'class-transformer';

class ProfileController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Profile);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const repo = getRepository(Profile);
            const res = await repo.find({ where: { id: id }, relations: ['accomplishment', 'focusArea', 'occupation'] });
            return response.status(200).send(res);
        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { work_resume,
                image,
                description,
            } = request.body
            const repo = await getConnection()
                .createQueryBuilder()
                .update(Profile)
                .set({
                    work_resume,
                    image,
                    description,
                })
                .where("id = :id", { id: id })
                .execute();
            return response.json(repo);

        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Profile);
            const res = await repo.delete(request.params.id)
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default ProfileController;