import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import OccupationRepository from './../infra/typeorm/repositories/OccupationRepository';
import IOccupationRepository from './../repositories/IOccupationRepository';

@injectable()
export default class DeleteOccupationService {
    constructor(
        @inject(delay(() => OccupationRepository))
        private OccupationRepository: IOccupationRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.OccupationRepository.delete(id);
    }
}