
import { DeleteResult, getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import { getConnection } from "typeorm";
import { User } from '../entities/User';
import IUserRepository from './../../../repositories/IUserRepository';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';
import path from 'path'
import ISearchUserFiltered from './../../../repositories/ISearchUserFiltered';

class UserRepository implements IUserRepository {
    private userRepository: Repository<User>
    private profileRepository: Repository<Profile>
    constructor() {
        this.userRepository = getRepository(User);
        this.profileRepository = getRepository(Profile);
    }

    public async listAll(data: ISearchUserFiltered): Promise<User[]> {
        const user = await this.userRepository.find(
            {
                relations:
                    [
                        'profile',
                        'profile.academicFormation',
                        'profile.accomplishment',
                        'profile.focusArea',
                        'profile.language',
                        'profile.occupation',
                    ]
            });
        if (data.city) {
            var parsedCity = data.city.replace('_', ' ')
        }

        if (data.role) {
            var parsedRole = String(data.role).replace('_', ' ')
            parsedRole = parsedRole.replace('_', ' ')
        }

        if (data.city && data.role) {
            console.log(`both: ${parsedCity} and ${parsedRole}`);
            return user.filter((user) => (user.city == parsedCity && user.profile.role == parsedRole))
        } else if (data.city) {
            console.log('city');
            return user.filter((user) => (user.city == parsedCity))
        } else {
            console.log(`role: ${parsedRole}`);
            return user.filter((user) => (user.profile.role == parsedRole))
        }

    }

    public async findById(id: string): Promise<User> {

        const user = await this.userRepository.findOne({
            where: { id: id }, relations: [
                'profile',
                'profile.academicFormation',
                'profile.accomplishment',
                'profile.focusArea',
                'profile.language',
                'profile.occupation',
            ]
        })
        const image = path.resolve(__dirname, '..', '..', '..', '..', '..', `uploads/${user.profile.image}`)
        console.log(image);
        user.profile.image = image;
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