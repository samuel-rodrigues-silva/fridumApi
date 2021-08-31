
import { DeleteResult, getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import { getConnection } from "typeorm";
import { User } from '../entities/User';
import IUserRepository from './../../../repositories/IUserRepository';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';
import { Accomplishment } from './../../../../Accomplishments/infra/typeorm/entities/Accomplishment';
import { FocusArea } from './../../../../FocusArea/infra/typeorm/entities/FocusArea';
import { Occupation } from './../../../../Occupation/infra/typeorm/entities/Occupation';

class UserRepository implements IUserRepository {
    private userRepository: Repository<User>
    private profileRepository: Repository<Profile>
    constructor() {
        this.userRepository = getRepository(User);
        this.profileRepository = getRepository(Profile);
    }

    public async listAll(): Promise<User[]> {
        const user = await this.userRepository.find({ relations: ['profile'] });
        return user
    }

    public async findById(id: string): Promise<User> {

        const user = await this.userRepository.findOne({ where: { id: id }, relations: ['profile'] })
        return user
    }

    public async create(data: ICreateUserDTO): Promise<User> {
        const profile = this.profileRepository.create({
            role: '',
            work_resume: '',
            image: '',
            description: '',
            accomplishment: [],
            focusArea: [],
            occupation: []
        })
        const pr = await this.profileRepository.save(profile);
        console.log(pr);
        const repo = this.userRepository.create(data);
        repo.profile = pr;
        const resp = await this.userRepository.save(repo);
        return resp;
    }
    public async update(data: ICreateUserDTO, id: string): Promise<void> {

        await getConnection()
            .createQueryBuilder()
            .update(User)
            .set(data)
            .where("id = :id", { id: id })
            .execute();

    }

    public async remove(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}

export default UserRepository