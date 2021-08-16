
import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import { getConnection } from "typeorm";
import { User } from '../entities/User';
import IUserRepository from './../../../repositories/IUserRepository';

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>
    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findById(id: string): Promise<User> {
        const user = this.ormRepository.findOne({ where: id, relations: ['profile'] })
        return user
    }
    public async create(data: ICreateUserDTO): Promise<User> {
        const repo = this.ormRepository.create(data);
        const user = await this.ormRepository.save(repo);
        return user;
    }
    public async update(data: ICreateUserDTO, id: string): Promise<void> {

        await getConnection()
            .createQueryBuilder()
            .update(User)
            .set(data)
            .where("id = :id", { id: id })
            .execute();
    }
}

export default UserRepository