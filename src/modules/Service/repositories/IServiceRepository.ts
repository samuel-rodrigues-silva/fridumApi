
import { DeleteResult, UpdateResult } from 'typeorm';
import { Service } from '../infra/typeorm/entities/Service';
import ICreateServiceDTO from './../dtos/ICreateServiceDTO';

export default interface IServiceRepository {
    findById(id: string): Promise<Service[]>
    findByFollowId(id: string): Promise<Service[]>
    create(data: ICreateServiceDTO): Promise<Service | null>
    update(data: ICreateServiceDTO, id: string): Promise<UpdateResult>
    delete(id: string): Promise<DeleteResult>
}