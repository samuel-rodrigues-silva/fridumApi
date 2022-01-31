import { injectable, inject, delay } from 'tsyringe';
import { Infrastructure } from '../infra/typeorm/entities/Infrastructure';
import IInfrastructureRepository from '../repositories/IInfrastructureRepository';
import ICreateInfrastructureDTO from '../dtos/ICreateInfrastructureDTO';
import InfrastructureRepository from '../infra/typeorm/repositories/InfrastructureRepository';

@injectable()
class CreateInfrastructureService {

    constructor(
        @inject(delay(() => InfrastructureRepository))
        private infrastructureRepository: IInfrastructureRepository) { }

    public async execute(
        data: ICreateInfrastructureDTO
    ): Promise<Infrastructure> {
        return await this.infrastructureRepository.create(data);
    }
}

export default CreateInfrastructureService