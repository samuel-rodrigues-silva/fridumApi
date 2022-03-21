import { injectable, inject, delay } from 'tsyringe';
import IChatMessageRepository from './../repositories/IChatMessageRepository';
import { ChatMessage } from './../infra/typeorm/entities/ChatMessage';
import ICreateChatMessageDTO from './../dtos/ICreateChatMessageDTO';
import ChatMessageRepository from '../infra/typeorm/repositories/ChatMessageRepository';

@injectable()
class ManageUnreadMessages {
    constructor(
        @inject(delay(() => ChatMessageRepository))
        private chatMessageRepository: IChatMessageRepository,
    ) { }

    public async execute(idList: []): Promise<ChatMessage[]> {
        return await this.chatMessageRepository.fetchAndSetMessagesAsRead(idList);
    }
}

export default ManageUnreadMessages