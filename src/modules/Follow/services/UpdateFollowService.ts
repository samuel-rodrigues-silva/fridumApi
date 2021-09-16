import { injectable, inject, delay } from 'tsyringe';
import IFollowRepository from './../repositories/IFollowRepository';
import { Follow } from './../infra/typeorm/entities/Follow';
import ICreateFollowDTO from './../dtos/ICreateFollowDTO';
import FollowRepository from '../infra/typeorm/repositories/FollowRepository';
import { UpdateResult } from 'typeorm';

@injectable()
class UpdateFollowService {
    constructor(
        @inject(delay(() => FollowRepository))
        private followRepository: IFollowRepository,
    ) { }

    public async execute(data: ICreateFollowDTO, id: string): Promise<UpdateResult> {
        return await this.followRepository.update(data, id);
    }
}

export default UpdateFollowService