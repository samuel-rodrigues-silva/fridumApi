import ICreateFollowDTO from '../dtos/ICreateFollowDTO';
import { Follow } from './../infra/typeorm/entities/Follow';

export default interface IFollowRepository {
    create(data: ICreateFollowDTO): Promise<Follow | null>;
    delete(followId: string): Promise<void>;
}