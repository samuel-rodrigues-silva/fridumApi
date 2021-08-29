import { injectable, inject, delay } from 'tsyringe';
import IOccupationRepository from './../repositories/IOccupationRepository';
import OccupationRepository from '../infra/typeorm/repositories/OccupationRepository';
import ICreateOccupationDTO from './../dtos/ICreateOccupationDTO';

@injectable()
class UpdateOccupationService {
    constructor(
        @inject(delay(() => OccupationRepository))
        private OccupationRepository: IOccupationRepository,
    ) { }

    public async execute(data: ICreateOccupationDTO, id: string): Promise<void> {
        await this.OccupationRepository.update(data, id);
    }
}

export default UpdateOccupationService