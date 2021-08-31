import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateLanguageService from './../../../services/CreateLanguageService';
import { classToClass } from 'class-transformer';
import UpdateLanguageService from './../../../services/UpdateLanguageService';
import DeleteLanguageService from './../../../services/DeleteLanguageService';

class LanguageController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createLanguage = container.resolve(CreateLanguageService)
            const Language = await createLanguage.execute(request.body);
            return response.json(classToClass(Language))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(UpdateLanguageService);
            await repo.execute(request.body, id);

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteLanguageService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default LanguageController;