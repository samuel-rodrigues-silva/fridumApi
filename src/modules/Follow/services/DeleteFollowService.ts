import { injectable, inject, delay } from 'tsyringe';
import FollowRepository from './../infra/typeorm/repositories/FollowRepository';
import IFollowRepository from './../repositories/IFollowRepository';

@injectable()
export default class DeleteFollowService {
    constructor(
        @inject(delay(() => FollowRepository))
        private followRepository: IFollowRepository) { }

    public async execute(id: string) {
        this.followRepository.delete(id);
    }
}