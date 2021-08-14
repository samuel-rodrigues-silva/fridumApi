import { getRepository, Repository } from 'typeorm';
import ISessionRepository from './../../../repositories/ISessionRepository';
import { Session } from './../entities/Session';
import ICreateSessionDTO from './../../../dtos/ICreateSessionDTO';

class SessionRepository implements ISessionRepository {
    private ormRepository: Repository<Session>;
    constructor() {
        this.ormRepository = getRepository(Session);
    }

    public async fetchBy(data: Session): Promise<Session> {
        const session = await this.ormRepository.findOne(data);
        return session;
    }

    public async create(session: ICreateSessionDTO): Promise<Session> {
        const data = this.ormRepository.create(session);
        await this.ormRepository.save(data);

        return data;
    }

    public async update(session: ICreateSessionDTO, sessionId: string): Promise<Session> {
        const data = this.ormRepository.create(session);
        await this.ormRepository.update(sessionId, session);

        return data;
    }

    public async remove(sessionId: string): Promise<string> {
        return ''
    }

}

export default SessionRepository