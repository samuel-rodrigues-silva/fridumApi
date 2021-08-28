import { injectable, inject, delay } from 'tsyringe';
import AccomplishmentRepository from './../infra/typeorm/repositories/AccomplishmentRepository';
import IAccomplishmentRepository from './../repositories/IAccomplishmentRepository';

@injectable()
export default class DeleteAccomplishmentService {
    constructor(
        @inject(delay(() => AccomplishmentRepository))
        private AccomplishmentRepository: IAccomplishmentRepository) { }

    public async execute(id: string) {
        this.AccomplishmentRepository.delete(id);
    }
}