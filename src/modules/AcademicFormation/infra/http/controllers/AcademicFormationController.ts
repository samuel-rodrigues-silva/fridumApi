import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { container } from 'tsyringe';
import { AcademicFomation } from '../../typeorm/entities/AcademicFormation';
import CreateAcademicFormationService from './../../../services/CreateAcademicFormationService';

class AcademicFormationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createacademicFormation = container.resolve(CreateAcademicFormationService)
            const academicFormation = await createacademicFormation.execute(request.body);
            return response.status(200).json(academicFormation)
        } catch (err) {
            return response.status(401).send(err.message);
        }


    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            console.log(request.params)
            const repo = getRepository(AcademicFomation);
            const res = await repo.find(request.params);
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {

        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(AcademicFomation);
            const res = await repo.delete(request.params.id)
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default AcademicFormationController;