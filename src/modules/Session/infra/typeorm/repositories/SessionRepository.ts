import { getConnection, getRepository, Repository } from 'typeorm';
import ISessionRepository from './../../../repositories/ISessionRepository';
import { Session } from './../entities/Session';
import ICreateSessionDTO from './../../../dtos/ICreateSessionDTO';
import { User } from '../../../../User/infra/typeorm/entities/User';

class SessionRepository implements ISessionRepository {
    private ormRepository: Repository<Session>;
    constructor() {
        this.ormRepository = getRepository(Session);
    }

    public async fetchBy(sessionId: string): Promise<Session> {
        const session = await this.ormRepository.findOne({
            where: { id: sessionId }, relations: [
                'user']
        });
        return session;
    }

    public async create(session: ICreateSessionDTO): Promise<Session> {
        const userRepo = getRepository(User);
        const user = await userRepo.findOne({ where: { id: session.userId } });
        const data = this.ormRepository.create(session);
        data.user = user;
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

    public async remove(sessionId: string): Promise<void> {
        await this.ormRepository.delete(sessionId);
    }

}

export default SessionRepository