
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import ICreateProfileDTO from '../../../dtos/ICreateProfileDTO';
import { Profile } from '../entities/Profile';
import IProfileRepository from './../../../repositories/IProfileRepository';
import { getRepository } from 'typeorm';
import { getConnection } from 'typeorm';

class ProfileRepository implements IProfileRepository {
    private ormRepository: Repository<Profile>;
    constructor() {
        this.ormRepository = getRepository(Profile);
    }

    public async create(data: ICreateProfileDTO): Promise<Profile> {
        const repo = this.ormRepository.create(data);
        const profile = await this.ormRepository.save(repo);
        return profile
    }

    public async fetchBy(id: string): Promise<Profile> {
        return await this.ormRepository.findOne({ where: { id: id }, relations: ['accomplishment', 'focusArea', 'occupation'] });
    }
    public async listAll(): Promise<Profile[]> {
        return await this.ormRepository.find();
    }

    public async update(data: ICreateProfileDTO, id: string): Promise<any> {
        const profile = await this.ormRepository.findOne({ where: { id: id } });
        const parsedProfile = {
            role: data.role ? data.role : profile.role,
            description: data.description ? data.description : profile.description,
            image: data.image ? data.image : profile.image,
            work_resume: data.work_resume ? data.work_resume : profile.work_resume,
            video: data.video ? data.video : profile.video,
        }

        await getConnection()
            .createQueryBuilder()
            .update(Profile)
            .set(parsedProfile)
            .where("id = :id", { id: id })
            .execute()
        return parsedProfile
    }
    public async remove(id: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(id)
    }

}

export default ProfileRepository