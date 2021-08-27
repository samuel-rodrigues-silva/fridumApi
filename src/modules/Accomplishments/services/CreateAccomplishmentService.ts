import { injectable, inject, delay } from 'tsyringe';
import { Accomplishment } from '../infra/typeorm/entities/Accomplishment';
import IAccomplishmentRepository from '../repositories/IAccomplishmentRepository';
import ICreateAcomplishmentDTO from './../dtos/ICreateAccomplishmentDTO';
import AccomplishmentRepository from './../infra/typeorm/repositories/AccomplishmentRepository';

@injectable()
class CreateAccomplishmentService {

    constructor(
        @inject(delay(()=> AccomplishmentRepository))
        private accomplishmentRepository: IAccomplishmentRepository) { }

    public async execute(
        data: ICreateAcomplishmentDTO
    ): Promise<Accomplishment> {
        const accomplishment = await this.accomplishmentRepository.create(data);
        return accomplishment;
    }
}

export default CreateAccomplishmentService