import { injectable, inject, delay } from 'tsyringe';
import ProfileRepository from './../infra/typeorm/repositories/ProfileRepository';
import ICreateProfileDTO from './../dtos/ICreateProfileDTO';
import { UpdateResult } from 'typeorm';

@injectable()
class UpdateProfileService {
    constructor(
        @inject(delay(() => ProfileRepository))
        private profileRepository
    ) { }
    public async execute(data: ICreateProfileDTO, id: string): Promise<UpdateResult> {
        return await this.profileRepository.update(data, id);

    }
}

export default UpdateProfileService