import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import AcademicFormationRepository from './../infra/typeorm/repositories/AcademicFormationRepository';
import IAcademicFormationRepository from './../repositories/IAcademicFormationRepository';

@injectable()
export default class DeleteAcademicFormationService {
    constructor(
        @inject(delay(() => AcademicFormationRepository))
        private academicFormationRepository: IAcademicFormationRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.academicFormationRepository.delete(id);
    }
}