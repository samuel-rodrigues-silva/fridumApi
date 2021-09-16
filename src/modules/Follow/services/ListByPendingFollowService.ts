import { injectable, inject, delay } from 'tsyringe';
import IFollowRepository from './../repositories/IFollowRepository';
import { Follow } from './../infra/typeorm/entities/Follow';
import FollowRepository from '../infra/typeorm/repositories/FollowRepository';

@injectable()
class ListByPendingFollowService {
    constructor(
        @inject(delay(() => FollowRepository))
        private followRepository: IFollowRepository,
    ) { }

    public async execute(id: string): Promise<Follow[]> {
        return await this.followRepository.listByPending(id);
    }
}

export default ListByPendingFollowService