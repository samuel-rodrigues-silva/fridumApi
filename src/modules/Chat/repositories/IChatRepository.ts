import ICreateChatDTO from '../dtos/ICreateChatDTO';
import { Chat } from './../infra/typeorm/entities/Chat';

export default interface IChatRepository {
    create(data: ICreateChatDTO): Promise<Chat>;
    delete(ChatId: string): Promise<void>;
}