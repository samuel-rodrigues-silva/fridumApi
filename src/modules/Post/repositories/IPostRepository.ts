
import { DeleteResult } from 'typeorm';
import { Post } from '../infra/typeorm/entities/Post';
import ICreatePostDTO from './../dtos/ICreatePostDTO';

export default interface IPostRepository {
    listByCity(city: string): Promise<Post[]>
    findBy(id: string): Promise<Post>
    create(data: ICreatePostDTO): Promise<Post>
    update(data: ICreatePostDTO, id: string): Promise<void>
    delete(id: string): Promise<DeleteResult>
}