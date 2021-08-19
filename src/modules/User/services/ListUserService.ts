import { injectable, inject, delay } from 'tsyringe';
import IUserRepository from './../repositories/IUserRepository';
import { User } from './../infra/typeorm/entities/User';
import UserRepository from '../infra/typeorm/repositories/UserRepository';

@injectable()
class ListUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository,
    ) { }

    public async execute(): Promise<User[]> {
        const user = await this.userRepository.listAll();
        return user;
    }
}

export default ListUserService