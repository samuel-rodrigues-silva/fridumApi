import ICreateChatDTO from '../dtos/ICreateChatDTO';
import { Chat } from './../infra/typeorm/entities/Chat';

export default interface IChatRepository {
    list(id: string): Promise<Chat[]>;
    show(id: string): Promise<Chat[]>;
    fetchChatsTotalMessagesUnread(id: string): Promise<
        {
            totalFollowChatsWithMessagesUnread: number,
            totalUserChatsWithMessagesUnread: number
        }
    >
    create(data: ICreateChatDTO): Promise<Chat>;
    delete(ChatId: string): Promise<void>;
}