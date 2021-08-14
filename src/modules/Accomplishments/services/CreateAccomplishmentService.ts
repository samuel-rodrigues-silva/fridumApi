import { injectable, inject } from 'tsyringe';
import IAccomplishmentRepository from '../repositories/IAccomplishmentRepository';
import ICreateAcomplishmentDTO from './../dtos/ICreateAccomplishmentDTO';

@injectable()
class CreateAccomplishmentService {

    constructor(
        @inject('AccomplishmentRepository')
        private accomplishmentRepository: IAccomplishmentRepository) { }

    public async execute(
        { user_id, title, description, image }: ICreateAcomplishmentDTO
    ): Promise<any> {
        const accomplishment = await this.accomplishmentRepository.create({ user_id, title, description, image })
        return accomplishment;
    }
}

export default CreateAccomplishmentService