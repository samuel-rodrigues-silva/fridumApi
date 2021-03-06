import { Session } from './../infra/typeorm/entities/Session';
import ICreateSessionDTO from './../dtos/ICreateSessionDTO';
import { DeleteResult } from 'typeorm';

export default interface ISessionRepository {
    fetchBy(sessionId: string): Promise<Session>;
    create(data: ICreateSessionDTO): Promise<Session>;
    update(data: ICreateSessionDTO, sessionId: string): Promise<void>;
    remove(sessionId: string): Promise<DeleteResult>;
}