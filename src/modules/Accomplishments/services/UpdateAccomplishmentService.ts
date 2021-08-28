import { injectable, inject, delay } from 'tsyringe';
import IAccomplishmentRepository from './../repositories/IAccomplishmentRepository';
import AccomplishmentRepository from '../infra/typeorm/repositories/AccomplishmentRepository';
import ICreateAccomplishmentDTO from './../dtos/ICreateAccomplishmentDTO';

@injectable()
class UpdateAccomplishmentService {
    constructor(
        @inject(delay(() => AccomplishmentRepository))
        private accomplishmentRepository: IAccomplishmentRepository,
    ) { }

    public async execute(data: ICreateAccomplishmentDTO, id: string): Promise<void> {
        await this.accomplishmentRepository.update(data, id);
    }
}

export default UpdateAccomplishmentService