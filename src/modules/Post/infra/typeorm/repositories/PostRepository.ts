
import { getRepository, Repository } from 'typeorm';
import ICreatePostDTO from '../../../dtos/ICreatePostDTO';
import { getConnection } from "typeorm";
import { Post } from '../entities/Post';
import IPostRepository from './../../../repositories/IPostRepository';

class PostRepository implements IPostRepository {
    private PostRepository: Repository<Post>
    constructor() {
        this.PostRepository = getRepository(Post);
    }

    public async listByCity(): Promise<Post[]> {
        return await this.PostRepository.find({ relations: ['user'] });
    }

    public async findBy(id: string): Promise<Post> {

        return await this.PostRepository.findOne({ where: { id: id }, relations: ['user'] })
    }

    public async create(data: ICreatePostDTO): Promise<Post> {
        const repo = this.PostRepository.create(data);
        const resp = await this.PostRepository.save(repo);
        return resp;
    }
    public async update(data: ICreatePostDTO, id: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Post)
            .set(data)
            .where("id = :id", { id: id })
            .execute();

    }

    public async remove(id: string): Promise<void> {
        await this.PostRepository.delete(id);
    }
}

export default PostRepository