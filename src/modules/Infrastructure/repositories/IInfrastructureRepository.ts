
import { DeleteResult } from 'typeorm';
import ICreateInfrastructureDTO from '../dtos/ICreateInfrastructureDTO';
import { Infrastructure } from './../infra/typeorm/entities/Infrastructure';

export default interface IInfrastructureRepository {
    create(data: ICreateInfrastructureDTO): Promise<Infrastructure>;
    update(data: ICreateInfrastructureDTO, infrastructureId: string): Promise<void>;
    delete(infrastructureId: string): Promise<DeleteResult>;
}