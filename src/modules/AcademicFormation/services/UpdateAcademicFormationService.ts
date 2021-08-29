import { injectable, inject, delay } from 'tsyringe';
import IAcademicFormationRepository from './../repositories/IAcademicFormationRepository';
import AcademicFormationRepository from '../infra/typeorm/repositories/AcademicFormationRepository';
import ICreateAcademicFormationDTO from './../dtos/ICreateAcademicFormationDTO';

@injectable()
class UpdateAcademicFormationService {
    constructor(
        @inject(delay(() => AcademicFormationRepository))
        private academicFormationRepository: IAcademicFormationRepository,
    ) { }

    public async execute(data: ICreateAcademicFormationDTO, id: string): Promise<void> {
        await this.academicFormationRepository.update(data, id);
    }
}

export default UpdateAcademicFormationService