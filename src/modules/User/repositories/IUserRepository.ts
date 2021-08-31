
import { DeleteResult } from 'typeorm';
import { User } from '../infra/typeorm/entities/User';
import ICreateUserDTO from './../dtos/ICreateUserDTO';

export default interface IUserRepository {
    listAll(): Promise<User[]>
    findById(id: string): Promise<User>
    create(data: ICreateUserDTO): Promise<User>
    update(data: ICreateUserDTO, id: string): Promise<void>
    remove(id: string): Promise<DeleteResult>
}