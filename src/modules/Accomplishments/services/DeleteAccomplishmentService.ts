import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import AccomplishmentRepository from './../infra/typeorm/repositories/AccomplishmentRepository';
import IAccomplishmentRepository from './../repositories/IAccomplishmentRepository';

@injectable()
export default class DeleteAccomplishmentService {
    constructor(
        @inject(delay(() => AccomplishmentRepository))
        private AccomplishmentRepository: IAccomplishmentRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.AccomplishmentRepository.delete(id);
    }
}