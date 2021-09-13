import { injectable, inject, delay } from 'tsyringe';
import IChatMessageRepository from './../repositories/IChatMessageRepository';
import { ChatMessage } from './../infra/typeorm/entities/ChatMessage';
import ICreateChatMessageDTO from './../dtos/ICreateChatMessageDTO';
import ChatMessageRepository from '../infra/typeorm/repositories/ChatMessageRepository';

@injectable()
class CreateChatMessageService {
    constructor(
        @inject(delay(() => ChatMessageRepository))
        private chatMessageRepository: IChatMessageRepository,
    ) { }

    public async execute(data: ICreateChatMessageDTO, id: string): Promise<ChatMessage> {
        return await this.chatMessageRepository.create(data, id);
    }
}

export default CreateChatMessageService