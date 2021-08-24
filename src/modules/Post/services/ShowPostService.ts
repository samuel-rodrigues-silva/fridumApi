import { injectable, inject, delay } from 'tsyringe';
import PostRepository from './../infra/typeorm/repositories/PostRepository';
import { Post } from './../infra/typeorm/entities/Post';

@injectable()
class ShowPostService {
    constructor(
        @inject(delay(() => PostRepository))
        private PostRepository
    ) { }
    public async execute(id: string): Promise<Post> {
        const repo = await this.PostRepository.findBy(id);
        return repo
    }
}

export default ShowPostService