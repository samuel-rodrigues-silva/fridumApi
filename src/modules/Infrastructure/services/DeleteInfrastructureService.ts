import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import InfrastructureRepository from './../infra/typeorm/repositories/InfrastructureRepository';
import IInfrastructureRepository from './../repositories/IInfrastructureRepository';

@injectable()
export default class DeleteInfrastructureService {
    constructor(
        @inject(delay(() => InfrastructureRepository))
        private infrastructureRepository: IInfrastructureRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.infrastructureRepository.delete(id);
    }
}