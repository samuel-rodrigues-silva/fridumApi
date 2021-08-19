import { injectable, inject, delay } from 'tsyringe';
import SessionRepository from './../infra/typeorm/repositories/SessionRepository';
import ISessionRepository from './../repositories/ISessionRepository';
import ICreateSessionDTO from './../dtos/ICreateSessionDTO';

@injectable()
export default class UpdateSessionService {
    constructor(
        @inject(delay(() => SessionRepository))
        private sessionRepository: ISessionRepository) { }

    public async execute(session: ICreateSessionDTO, id: string) {
        this.sessionRepository.update(session, id);
    }
}