
import { DeleteResult } from 'typeorm';
import { User } from '../infra/typeorm/entities/User';
import ICreateUserDTO from './../dtos/ICreateUserDTO';
import ISearchUserFiltered from './ISearchUserFiltered';

export default interface IUserRepository {
    listAll(data: ISearchUserFiltered): Promise<User[]>
    findById(id: string): Promise<User>
    create(data: ICreateUserDTO): Promise<User>
    update(data: ICreateUserDTO, id: string): Promise<void>
    remove(id: string): Promise<DeleteResult>
}
