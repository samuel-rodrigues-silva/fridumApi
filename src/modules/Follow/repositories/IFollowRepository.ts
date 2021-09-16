import { DeleteResult, UpdateResult } from 'typeorm';
import ICreateFollowDTO from '../dtos/ICreateFollowDTO';
import { Follow } from './../infra/typeorm/entities/Follow';

export default interface IFollowRepository {
    listByPending(id: string): Promise<Follow[]>
    list(id: string): Promise<Follow[]>
    create(data: ICreateFollowDTO): Promise<Follow | null>;
    update(data: ICreateFollowDTO, id: string): Promise<UpdateResult>;
    delete(followId: string): Promise<DeleteResult>;
}