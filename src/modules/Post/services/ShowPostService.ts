import { injectable, inject, delay } from 'tsyringe';
import PostRepository from './../infra/typeorm/repositories/PostRepository';
import { Post } from './../infra/typeorm/entities/Post';
import IPostRepository from './../repositories/IPostRepository';

@injectable()
class ShowPostService {
    constructor(
        @inject(delay(() => PostRepository))
        private PostRepository: IPostRepository
    ) { }
    public async execute(id: string): Promise<Post> {
        return await this.PostRepository.findBy(id);
    }
}

export default ShowPostService