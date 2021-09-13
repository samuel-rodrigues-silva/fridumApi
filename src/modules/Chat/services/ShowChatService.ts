import { injectable, inject, delay } from 'tsyringe';
import IChatRepository from './../repositories/IChatRepository';
import { Chat } from './../infra/typeorm/entities/Chat';
import ChatRepository from '../infra/typeorm/repositories/ChatRepository';

@injectable()
class ShowChatService {
    constructor(
        @inject(delay(() => ChatRepository))
        private chatRepository: IChatRepository,
    ) { }

    public async execute(id: string): Promise<Chat[]> {
        return await this.chatRepository.show(id);
    }
}

export default ShowChatService