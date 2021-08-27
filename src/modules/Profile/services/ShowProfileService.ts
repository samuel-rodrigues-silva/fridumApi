import { injectable, inject, delay } from 'tsyringe';
import ProfileRepository from './../infra/typeorm/repositories/ProfileRepository';
import { Profile } from './../infra/typeorm/entities/Profile';

@injectable()
class ShowProfileService {
    constructor(
        @inject(delay(() => ProfileRepository))
        private profileRepository
    ) { }
    public async execute(id: string): Promise<Profile> {
        const repo = await this.profileRepository.fetchBy(id);
        return repo
    }
}

export default ShowProfileService