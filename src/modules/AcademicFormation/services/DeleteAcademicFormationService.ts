import { injectable, inject, delay } from 'tsyringe';
import AcademicFormationRepository from './../infra/typeorm/repositories/AcademicFormationRepository';
import IAcademicFormationRepository from './../repositories/IAcademicFormationRepository';

@injectable()
export default class DeleteAcademicFormationService {
    constructor(
        @inject(delay(() => AcademicFormationRepository))
        private academicFormationRepository: IAcademicFormationRepository) { }

    public async execute(id: string) {
        this.academicFormationRepository.delete(id);
    }
}