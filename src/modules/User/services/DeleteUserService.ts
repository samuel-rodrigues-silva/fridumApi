import { injectable, inject, delay } from 'tsyringe';
import UserRepository from './../infra/typeorm/repositories/UserRepository';
import IUserRepository from './../repositories/IUserRepository';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository) { }

    public async execute(id: string) {
        this.userRepository.remove(id);
    }
}