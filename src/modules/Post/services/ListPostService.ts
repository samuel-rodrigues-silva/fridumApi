import { injectable, inject, delay } from 'tsyringe';
import PostRepository from './../infra/typeorm/repositories/PostRepository';
import { Post } from './../infra/typeorm/entities/Post';
import IPostRepository from './../repositories/IPostRepository';

@injectable()
class ListPostService {
    constructor(

        @inject(delay(() => PostRepository))
        private postRepository: IPostRepository
    ) { }
    public async execute(city: string): Promise<Post[]> {
        return await this.postRepository.listByCity(city);
    }
}

export default ListPostService