import { injectable, inject, delay } from 'tsyringe';
import IUserRepository from './../repositories/IUserRepository';
import { User } from './../infra/typeorm/entities/User';
import UserRepository from '../infra/typeorm/repositories/UserRepository';
import ICreateUserDTO from './../dtos/ICreateUserDTO';

@injectable()
class UpdateUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository,
    ) { }

    public async execute(data: ICreateUserDTO, id: string): Promise<void> {
        const user = await this.userRepository.update(data, id);
    }
}

export default UpdateUserService