import { injectable, inject, delay } from 'tsyringe';
import { Occupation } from '../infra/typeorm/entities/Occupation';
import IAcademicFomationRepository from '../repositories/IOccupationRepository';
import ICreateOccupationDTO from '../dtos/ICreateOccupationDTO';
import OccupationRepository from '../infra/typeorm/repositories/OccupationRepository';

@injectable()
class CreateOccupationService {

    constructor(
        @inject(delay(()=> OccupationRepository))
        private OccupationRepository: IAcademicFomationRepository) { }

    public async execute(
        data: ICreateOccupationDTO
    ): Promise<Occupation> {
       return await this.OccupationRepository.create(data);
    }
}

export default CreateOccupationService