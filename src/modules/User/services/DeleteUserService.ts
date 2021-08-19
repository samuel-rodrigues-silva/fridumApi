import { injectable, inject, delay } from 'tsyringe';
import UserRepository from './../infra/typeorm/repositories/UserRepository';
import IUserRepository from './../repositories/IUserRepository';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private sessionRepository: IUserRepository) { }

    public async execute(id: string) {
        this.sessionRepository.remove(id);
    }
}