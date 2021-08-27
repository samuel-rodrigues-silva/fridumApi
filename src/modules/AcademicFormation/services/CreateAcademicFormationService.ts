import { injectable, inject, delay } from 'tsyringe';
import { AcademicFomation } from '../infra/typeorm/entities/AcademicFormation';
import IAcademicFomationRepository from '../repositories/IAcademicFormationRepository';
import ICreateAcademicFormationDTO from '../dtos/ICreateAcademicFormationDTO';
import AcademicFormationRepository from '../infra/typeorm/repositories/AcademicFormationRepository';

@injectable()
class CreateAcademicFormationService {

    constructor(
        @inject(delay(()=> AcademicFormationRepository))
        private academicFormationRepository: IAcademicFomationRepository) { }

    public async execute(
        data: ICreateAcademicFormationDTO
    ): Promise<AcademicFomation> {
       return await this.academicFormationRepository.create(data);
    }
}

export default CreateAcademicFormationService