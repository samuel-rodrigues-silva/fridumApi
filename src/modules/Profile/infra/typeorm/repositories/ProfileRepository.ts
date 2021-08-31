
import { DeleteResult, Repository } from 'typeorm';
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
    public async fetchBy(id: string): Promise<Profile> {
        return await this.ormRepository.findOne({ where: { id: id }, relations: ['accomplishment', 'focusArea', 'occupation'] });
    }
    public async listAll(): Promise<Profile[]> {
        return await this.ormRepository.find();
    }

    public async create(data: ICreateProfileDTO): Promise<Profile> {
        const repo = this.ormRepository.create(data);
        const profile = await this.ormRepository.save(repo);
        return profile
    }
    public async update(data: ICreateProfileDTO, id: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Profile)
            .set(data)
            .where("id = :id", { id: id })
            .execute();
    }
    public async remove(id: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(id)
    }

}

export default ProfileRepository