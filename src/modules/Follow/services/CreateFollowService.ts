import { injectable, inject, delay } from 'tsyringe';
import IFollowRepository from './../repositories/IFollowRepository';
import { Follow } from './../infra/typeorm/entities/Follow';
import ICreateFollowDTO from './../dtos/ICreateFollowDTO';
import FollowRepository from '../infra/typeorm/repositories/FollowRepository';

@injectable()
class CreateFollowService {
    constructor(
        @inject(delay(() => FollowRepository))
        private followRepository: IFollowRepository,
    ) { }

    public async execute(data: ICreateFollowDTO): Promise<Follow> {
        return await this.followRepository.create(data);
    }
}

export default CreateFollowService