import { injectable, inject, delay } from 'tsyringe';
import IUserRepository from './../repositories/IUserRepository';
import { User } from './../infra/typeorm/entities/User';
import ICreateUserDTO from './../dtos/ICreateUserDTO';
import UserRepository from '../infra/typeorm/repositories/UserRepository';

@injectable()
class CreateUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository,
    ) { }

    public async execute( data: ICreateUserDTO): Promise<User> {
        return await this.userRepository.create(data);
    }
}

export default CreateUserService