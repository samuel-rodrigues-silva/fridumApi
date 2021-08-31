import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import StarredRepository from './../infra/typeorm/repositories/StarredRepository';
import IStarredRepository from './../repositories/IStarredRepository';

@injectable()
export default class DeleteStarredService {
    constructor(
        @inject(delay(() => StarredRepository))
        private StarredRepository: IStarredRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.StarredRepository.delete(id);
    }
}