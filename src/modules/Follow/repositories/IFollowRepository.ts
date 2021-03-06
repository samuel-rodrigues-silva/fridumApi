import { DeleteResult, UpdateResult } from 'typeorm';
import ICreateFollowDTO from '../dtos/ICreateFollowDTO';
import { Follow } from './../infra/typeorm/entities/Follow';

export default interface IFollowRepository {
    list(id: string): Promise<Follow[]>
    create(data: ICreateFollowDTO): Promise<Follow | null>;
    delete(followId: string): Promise<DeleteResult>;
}