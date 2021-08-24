import { injectable, inject, delay } from 'tsyringe';
import PostRepository from './../infra/typeorm/repositories/PostRepository';
import { Post } from './../infra/typeorm/entities/Post';

@injectable()
class ListPostService {
    constructor(
        @inject(delay(() => PostRepository))
        private PostRepository
    ) { }
    public async execute(): Promise<Post[]> {
        return await this.PostRepository.listByCity();
    }
}

export default ListPostService