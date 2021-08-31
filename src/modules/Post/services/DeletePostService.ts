import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import PostRepository from './../infra/typeorm/repositories/PostRepository';
import IPostRepository from './../repositories/IPostRepository';

@injectable()
class DeletePostService {
    constructor(
        @inject(delay(() => PostRepository))
        private postRepository: IPostRepository
    ) { }
    public async execute(id: string): Promise<DeleteResult> {
        return await this.postRepository.delete(id);
    }
}

export default DeletePostService