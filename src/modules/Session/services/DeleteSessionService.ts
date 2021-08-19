import { injectable, inject, delay } from 'tsyringe';
import SessionRepository from './../infra/typeorm/repositories/SessionRepository';
import ISessionRepository from './../repositories/ISessionRepository';
import ICreateSessionDTO from './../dtos/ICreateSessionDTO';

@injectable()
export default class DeleteSessionService {
    constructor(
        @inject(delay(() => SessionRepository))
        private sessionRepository: ISessionRepository) { }

    public async execute(id: string) {
        this.sessionRepository.remove(id);
    }
}