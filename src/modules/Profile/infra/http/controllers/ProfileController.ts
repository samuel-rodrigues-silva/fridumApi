import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Profile } from '../../typeorm/entities/Profile';
import { getConnection } from 'typeorm';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';
import ListProfileService from './../../../services/ListProfileService';
import ShowProfileService from './../../../services/ShowProfileService';
import UpdateProfileService from './../../../services/UpdateProfileService';
import DeleteProfileService from './../../../services/DeleteProfileService';

class ProfileController {

    public async listAll(reques: Request, response: Response): Promise<Response> {
        try {
            const repo = container.resolve(ListProfileService);
            const profileList = await repo.execute();
            return response.json(classToClass(profileList));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const repo = container.resolve(ShowProfileService);
            const profile = await repo.execute(id);
            return response.json(classToClass(profile));
        } catch (error) {
            return response.send(error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { role,
                description,
            } = request.body
            console.log(request.files)
            let image = ''
            let work_resume = ''
            let video = ''
            if (request.files['img']) {
                image = request.files['img'][0].filename;
            }
            if (request.files['work_resume']) {
                work_resume = request.files['work_resume'][0].filename;
            }
            if (request.files['video']) {
                video = request.files['video'][0].filename;
            }
            const repo = container.resolve(UpdateProfileService);
            const profile = await repo.execute({
                role,
                work_resume,
                image,
                video,
                description,
            }, id);
            return response.json(classToClass(profile));

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteProfileService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default ProfileController;