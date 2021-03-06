import { injectable, inject, delay } from 'tsyringe';
import ServiceRepository from './../infra/typeorm/repositories/ServiceRepository';
import ICreateServiceDTO from './../dtos/ICreateServiceDTO';
import IServiceRepository from './../repositories/IServiceRepository';
import { UpdateResult } from 'typeorm';

@injectable()
class UpdateServiceService {
    constructor(
        @inject(delay(() => ServiceRepository))
        private ServiceRepository: IServiceRepository
    ) { }
    public async execute(data: ICreateServiceDTO, id: string): Promise<void> {
        await this.ServiceRepository.update(data, id);

    }
}

export default UpdateServiceService