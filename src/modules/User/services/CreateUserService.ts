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

    public async execute({ name,
        birthDate,
        document,
        city,
        district,
        street,
        phNumber, }: ICreateUserDTO): Promise<User> {
        const user = await this.userRepository.create({
            name,
            birthDate,
            document,
            city,
            district,
            street,
            phNumber,
        });
        return user;

    }
}

export default CreateUserService