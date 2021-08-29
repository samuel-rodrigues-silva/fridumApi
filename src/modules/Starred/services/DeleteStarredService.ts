import { injectable, inject, delay } from 'tsyringe';
import StarredRepository from './../infra/typeorm/repositories/StarredRepository';
import IStarredRepository from './../repositories/IStarredRepository';

@injectable()
export default class DeleteStarredService {
    constructor(
        @inject(delay(() => StarredRepository))
        private StarredRepository: IStarredRepository) { }

    public async execute(id: string) {
        this.StarredRepository.delete(id);
    }
}