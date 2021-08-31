import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IPostRepository from "../../../repositories/IPostRepository";
import { Post } from './../entities/Post';
import ICreatePostDTO from './../../../dtos/ICreatePostDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';
import UserRepository from './../../../../User/infra/typeorm/repositories/UserRepository';

class PostRepository implements IPostRepository {
    private ormRepository: Repository<Post>;
    private userRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Post);
        this.userRepository = getRepository(User);
    }

    public async listByCity(city: string): Promise<Post[]> {
        const splitCity = city.split('_')
        const searchCity = splitCity[0] + ' ' + splitCity[1];
        const list = await this.ormRepository.find({ where: { city: searchCity }, relations: ['user', 'user.profile'] })
        return list;
    }

    public async findBy(id: string): Promise<Post> {
        return await this.ormRepository.findOne({ where: { id: id } });
    }

    public async create(data: ICreatePostDTO): Promise<Post> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const post = this.ormRepository.create(data);
        post.user = user;
        return await this.ormRepository.save(post);
    }

    public async update(data: ICreatePostDTO, postId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Post)
            .set(data)
            .where("id = :id", { id: postId })
            .execute();
    }

    public async delete(postId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(postId);
    }
}

export default PostRepository