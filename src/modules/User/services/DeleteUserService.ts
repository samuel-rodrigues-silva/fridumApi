import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import UserRepository from './../infra/typeorm/repositories/UserRepository';
import IUserRepository from './../repositories/IUserRepository';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject(delay(() => UserRepository))
        private userRepository: IUserRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.userRepository.remove(id);
    }
}