
import ICreateAccomplishmentDTO from '../dtos/ICreateAccomplishmentDTO';
import { Accomplishment } from './../infra/typeorm/entities/Accomplishment';

export default interface IAccomplishmentRepository {
    create(data: ICreateAccomplishmentDTO): Promise<Accomplishment>;
    update(data: ICreateAccomplishmentDTO, accomplishmentId: string): Promise<void>;
    delete(accomplishmentId: string): Promise<void>;
}