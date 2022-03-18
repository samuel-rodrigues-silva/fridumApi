import { injectable, inject, delay } from 'tsyringe';
import IChatRepository from '../repositories/IChatRepository';
import ChatRepository from '../infra/typeorm/repositories/ChatRepository';

@injectable()
class FetchChatsTotalMessagesUnread {
    constructor(
        @inject(delay(() => ChatRepository))
        private chatRepository: IChatRepository,
    ) { }

    public async execute(id: string): Promise<
        {
            totalFollowChatsWithMessagesUnread: number,
            totalUserChatsWithMessagesUnread: number
        }
    > {
        return await this.chatRepository.fetchChatsTotalMessagesUnread(id);
    }
}

export default FetchChatsTotalMessagesUnread