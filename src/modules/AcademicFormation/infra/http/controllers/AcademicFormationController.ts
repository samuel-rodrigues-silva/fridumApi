import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAcademicFormationService from './../../../services/CreateAcademicFormationService';
import { classToClass } from 'class-transformer';
import UpdateAcademicFormationService from './../../../services/UpdateAcademicFormationService';
import DeleteAcademicFormationService from './../../../services/DeleteAcademicFormationService';

class AcademicFormationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createAcademicFormation = container.resolve(CreateAcademicFormationService)
            const academicFormation = await createAcademicFormation.execute(request.body);
            return response.json(classToClass(academicFormation))
        } catch (err) {
            return response.status(401).send(err.message);
        }


    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(UpdateAcademicFormationService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeleteAcademicFormationService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default AcademicFormationController;