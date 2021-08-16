import { getConnection, getRepository, Repository } from 'typeorm';
import ISessionRepository from './../../../repositories/ISessionRepository';
import { Session } from './../entities/Session';
import ICreateSessionDTO from './../../../dtos/ICreateSessionDTO';
import { id } from 'date-fns/locale';

class SessionRepository implements ISessionRepository {
    private ormRepository: Repository<Session>;
    constructor() {
        this.ormRepository = getRepository(Session);
    }

    public async fetchBy(data: Session): Promise<Session> {
        const session = await this.ormRepository.findOne({ where: data, relations: ['user'] });
        return session;
    }

    public async create(session: ICreateSessionDTO): Promise<Session> {
        const data = this.ormRepository.create(session);
        await this.ormRepository.save(data);

        return data;
    }

    public async update(session: ICreateSessionDTO, sessionId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Session)
            .set(session)
            .where("id = :id", { id: sessionId })
            .execute();

    }

    public async remove(sessionId: string): Promise<string> {
        return ''
    }

}

export default SessionRepository