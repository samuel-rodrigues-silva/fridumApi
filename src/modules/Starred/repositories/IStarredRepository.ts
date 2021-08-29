import ICreateStarredDTO from '../dtos/ICreateStarredDTO';
import { Starred } from './../infra/typeorm/entities/Starred';

export default interface IStarredRepository {
    create(data: ICreateStarredDTO): Promise<Starred | null>;
    delete(StarredId: string): Promise<void>;
}