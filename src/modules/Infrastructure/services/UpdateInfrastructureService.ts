import { injectable, inject, delay } from 'tsyringe';
import IInfrastructureRepository from './../repositories/IInfrastructureRepository';
import InfrastructureRepository from '../infra/typeorm/repositories/InfrastructureRepository';
import ICreateInfrastructureDTO from './../dtos/ICreateInfrastructureDTO';

@injectable()
class UpdateInfrastructureService {
    constructor(
        @inject(delay(() => InfrastructureRepository))
        private infrastructureRepository: IInfrastructureRepository,
    ) { }

    public async execute(data: ICreateInfrastructureDTO, id: string): Promise<void> {
        await this.infrastructureRepository.update(data, id);
    }
}

export default UpdateInfrastructureService