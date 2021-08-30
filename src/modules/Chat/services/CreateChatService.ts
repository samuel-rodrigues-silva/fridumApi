import { injectable, inject, delay } from 'tsyringe';
import IChatRepository from './../repositories/IChatRepository';
import { Chat } from './../infra/typeorm/entities/Chat';
import ICreateChatDTO from './../dtos/ICreateChatDTO';
import ChatRepository from '../infra/typeorm/repositories/ChatRepository';

@injectable()
class CreateChatService {
    constructor(
        @inject(delay(() => ChatRepository))
        private ChatRepository: IChatRepository,
    ) { }

    public async execute(data: ICreateChatDTO): Promise<Chat> {
        return await this.ChatRepository.create(data);
    }
}

export default CreateChatService