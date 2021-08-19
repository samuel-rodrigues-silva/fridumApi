import { injectable, inject, delay } from 'tsyringe';
import IUserRepository from './../repositories/IUserRepository';
import { User } from './../infra/typeorm/entities/User';
import UserRepository from '../infra/typeorm/repositories/UserRepository';

@injectable()
class ShowUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository,
    ) { }

    public async execute(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);
        return user;
    }
}

export default ShowUserService