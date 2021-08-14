
import ICreateAccomplishmentDTO from '../dtos/ICreateAccomplishmentDTO';
import { User } from './../../User/infra/typeorm/entities/User';
import { Accomplishment } from './../infra/typeorm/entities/Accomplishment';

export default interface IAccomplishmentRepository {
    findById(userId: User): Promise<Accomplishment[]>;
    create(data: ICreateAccomplishmentDTO): Promise<Accomplishment>;
    update(data: Accomplishment, accomplishmentId: string): Promise<Accomplishment>;
    delete(accomplishmentId: string): Promise<void>;
}