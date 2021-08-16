
import { User } from '../infra/typeorm/entities/User';
import ICreateUserDTO from './../dtos/ICreateUserDTO';

export default interface IUserRepository {
    findById(id: string): Promise<User>
    create(data: ICreateUserDTO): Promise<User>
    update(data: ICreateUserDTO, id: string): Promise<void>
}