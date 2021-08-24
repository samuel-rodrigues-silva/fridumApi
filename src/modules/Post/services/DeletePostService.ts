import { injectable, inject, delay } from 'tsyringe';
import PostRepository from './../infra/typeorm/repositories/PostRepository';

@injectable()
class DeletePostService {
    constructor(
        @inject(delay(() => PostRepository))
        private PostRepository
    ) { }
    public async execute(id: string): Promise<void> {
        await this.PostRepository.remove(id);
    }
}

export default DeletePostService