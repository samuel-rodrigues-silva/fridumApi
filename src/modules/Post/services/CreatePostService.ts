import { injectable, inject, delay } from 'tsyringe';
import IPostRepository from './../repositories/IPostRepository';
import { Post } from './../infra/typeorm/entities/Post';
import ICreatePostDTO from './../dtos/ICreatePostDTO';
import PostRepository from './../infra/typeorm/repositories/PostRepository';

@injectable()
class CreatePostService {
    constructor(
        @inject(delay(() => PostRepository))
        private PostRepository: IPostRepository,
    ) { }

    public async execute( data : ICreatePostDTO): Promise<Post> {
        return await this.PostRepository.create(data);

    }
}

export default CreatePostService