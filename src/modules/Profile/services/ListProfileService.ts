import { injectable, inject, delay } from 'tsyringe';
import ProfileRepository from './../infra/typeorm/repositories/ProfileRepository';
import { Profile } from './../infra/typeorm/entities/Profile';

@injectable()
class ListProfileService {
    constructor(
        @inject(delay(() => ProfileRepository))
        private profileRepository
    ) { }
    public async execute(): Promise<Profile[]> {
        const repo = await this.profileRepository.listAll();
        return repo
    }
}

export default ListProfileService