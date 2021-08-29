import { injectable, inject, delay } from 'tsyringe';
import ServiceRepository from './../infra/typeorm/repositories/ServiceRepository';
import { Service } from './../infra/typeorm/entities/Service';
import IServiceRepository from './../repositories/IServiceRepository';

@injectable()
class ShowServiceService {
    constructor(
        @inject(delay(() => ServiceRepository))
        private ServiceRepository: IServiceRepository
    ) { }
    public async execute(id: string): Promise<Service> {
        return await this.ServiceRepository.findById(id);
    }
}

export default ShowServiceService