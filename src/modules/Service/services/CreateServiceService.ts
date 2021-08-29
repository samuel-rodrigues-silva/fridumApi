import { injectable, inject, delay } from 'tsyringe';
import IServiceRepository from './../repositories/IServiceRepository';
import { Service } from './../infra/typeorm/entities/Service';
import ICreateServiceDTO from './../dtos/ICreateServiceDTO';
import ServiceRepository from './../infra/typeorm/repositories/ServiceRepository';

@injectable()
class CreateServiceService {
    constructor(
        @inject(delay(() => ServiceRepository))
        private serviceRepository: IServiceRepository,
    ) { }

    public async execute( data : ICreateServiceDTO): Promise<Service> {
        return await this.serviceRepository.create(data);

    }
}

export default CreateServiceService