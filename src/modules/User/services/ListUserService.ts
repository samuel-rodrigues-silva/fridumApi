import { injectable, inject, delay } from 'tsyringe';
import IUserRepository from './../repositories/IUserRepository';
import { User } from './../infra/typeorm/entities/User';
import UserRepository from '../infra/typeorm/repositories/UserRepository';
import ISearchUserFiltered from './../repositories/ISearchUserFiltered';

@injectable()
class ListUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository,
    ) { }

    public async execute(data: ISearchUserFiltered): Promise<User[]> {
        return await this.userRepository.listAll(data);
    }
}

export default ListUserService