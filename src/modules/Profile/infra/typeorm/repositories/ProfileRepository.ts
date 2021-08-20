
import { Repository } from 'typeorm';
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
        const res = await this.ormRepository.findOne({ where: { id: id }, relations: ['accomplishment', 'focusArea', 'occupation'] });
        return res;
    }
    public async create(data: ICreateProfileDTO): Promise<Profile> {
        const res = await this.ormRepository.save(data);
        return res
    }
    public async update(data: ICreateProfileDTO, id: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Profile)
            .set(data)
            .where("id = :id", { id: id })
            .execute();
    }
    public async remove(id: string): Promise<void> {
        await this.ormRepository.delete(id)
    }

}

export default ProfileRepository