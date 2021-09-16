import { injectable, inject, delay } from 'tsyringe';
import IFollowRepository from './../repositories/IFollowRepository';
import { Follow } from './../infra/typeorm/entities/Follow';
import FollowRepository from '../infra/typeorm/repositories/FollowRepository';

@injectable()
class ListFollowService {
    constructor(
        @inject(delay(() => FollowRepository))
        private followRepository: IFollowRepository,
    ) { }

    public async execute(id: string): Promise<Follow[]> {
        return await this.followRepository.list(id);
    }
}

export default ListFollowService