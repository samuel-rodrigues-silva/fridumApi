
import { DeleteResult } from 'typeorm';
import { ChatMessage } from './../infra/typeorm/entities/ChatMessage';
import ICreateChatMessageDTO from './../dtos/ICreateChatMessageDTO';

export default interface IChatMessageRepository {
    create(data: ICreateChatMessageDTO, id: string): Promise<ChatMessage>;
    delete(evaluationId: string): Promise<DeleteResult>;
}