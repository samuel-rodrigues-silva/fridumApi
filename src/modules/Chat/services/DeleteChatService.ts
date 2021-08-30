import { injectable, inject, delay } from 'tsyringe';
import ChatRepository from './../infra/typeorm/repositories/ChatRepository';
import IChatRepository from './../repositories/IChatRepository';

@injectable()
export default class DeleteChatService {
    constructor(
        @inject(delay(() => ChatRepository))
        private ChatRepository: IChatRepository) { }

    public async execute(id: string) {
        this.ChatRepository.delete(id);
    }
}