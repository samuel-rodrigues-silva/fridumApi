import { injectable, inject, delay } from 'tsyringe';
import ProfileRepository from './../infra/typeorm/repositories/ProfileRepository';
import { Profile } from './../infra/typeorm/entities/Profile';

@injectable()
class DeleteProfileService {
    constructor(
        @inject(delay(() => ProfileRepository))
        private profileRepository
    ) { }
    public async execute(id: string): Promise<void> {
        await this.profileRepository.remove(id);
    }
}

export default DeleteProfileService