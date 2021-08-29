import { injectable, inject, delay } from 'tsyringe';
import IStarredRepository from './../repositories/IStarredRepository';
import { Starred } from './../infra/typeorm/entities/Starred';
import ICreateStarredDTO from './../dtos/ICreateStarredDTO';
import StarredRepository from '../infra/typeorm/repositories/StarredRepository';

@injectable()
class CreateStarredService {
    constructor(
        @inject(delay(() => StarredRepository))
        private StarredRepository: IStarredRepository,
    ) { }

    public async execute(data: ICreateStarredDTO): Promise<Starred> {
        return await this.StarredRepository.create(data);
    }
}

export default CreateStarredService