import { injectable, inject, delay } from 'tsyringe';
import ISessionRepository from './../repositories/ISessionRepository';
import { Session } from './../infra/typeorm/entities/Session';
import ICreateSessionDTO from './../dtos/ICreateSessionDTO';
import SessionRepository from '../infra/typeorm/repositories/SessionRepository';

@injectable()
class CreateSessionService {
    constructor(
        @inject(delay(() => SessionRepository))
        private sessionRepository: ISessionRepository,
    ) { }

    public async execute({ email, password, userId }: ICreateSessionDTO): Promise<Session> {
        const session = await this.sessionRepository.create({ email, password, userId });
        return session;

    }
}

export default CreateSessionService