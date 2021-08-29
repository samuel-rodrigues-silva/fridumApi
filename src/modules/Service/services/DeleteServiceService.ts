import { injectable, inject, delay } from 'tsyringe';
import ServiceRepository from './../infra/typeorm/repositories/ServiceRepository';
import IServiceRepository from './../repositories/IServiceRepository';

@injectable()
class DeleteServiceService {
    constructor(
        @inject(delay(() => ServiceRepository))
        private ServiceRepository: IServiceRepository
    ) { }
    public async execute(id: string): Promise<void> {
        await this.ServiceRepository.delete(id);
    }
}

export default DeleteServiceService