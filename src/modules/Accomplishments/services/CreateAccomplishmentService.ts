import { injectable, inject, delay } from 'tsyringe';
import IAccomplishmentRepository from './../repositories/IAccomplishmentRepository';
import { Accomplishment } from './../infra/typeorm/entities/Accomplishment';
import ICreateAccomplishmentDTO from './../dtos/ICreateAccomplishmentDTO';
import AccomplishmentRepository from '../infra/typeorm/repositories/AccomplishmentRepository';

@injectable()
class CreateAccomplishmentService {
    constructor(
        @inject(delay(() => AccomplishmentRepository))
        private accomplishmentRepository: IAccomplishmentRepository,
    ) { }

    public async execute(data: ICreateAccomplishmentDTO): Promise<Accomplishment> {
        return await this.accomplishmentRepository.create(data);
    }
}

export default CreateAccomplishmentService