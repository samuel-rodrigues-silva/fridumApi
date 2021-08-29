import { injectable, inject, delay } from 'tsyringe';
import PostRepository from './../infra/typeorm/repositories/PostRepository';
import ICreatePostDTO from './../dtos/ICreatePostDTO';
import IPostRepository from './../repositories/IPostRepository';

@injectable()
class UpdatePostService {
    constructor(
        @inject(delay(() => PostRepository))
        private PostRepository: IPostRepository
    ) { }
    public async execute(data: ICreatePostDTO, id: string): Promise<void> {
        return await this.PostRepository.update(data, id);

    }
}

export default UpdatePostService