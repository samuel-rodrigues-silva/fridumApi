import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IChatMessageRepository from "../../../repositories/IChatMessageRepository";
import { ChatMessage } from './../entities/ChatMessage';
import ICreateChatMessageDTO from './../../../dtos/ICreateChatMessageDTO';
import { Chat } from './../../../../Chat/infra/typeorm/entities/Chat';
import { User } from './../../../../User/infra/typeorm/entities/User';


class ChatMessageRepository implements IChatMessageRepository {
    private ormRepository: Repository<ChatMessage>;
    private chatRepository: Repository<Chat>;
    private userRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(ChatMessage);
        this.chatRepository = getRepository(Chat);
        this.userRepository = getRepository(User);
    }

    public async create(data: ICreateChatMessageDTO, id: string): Promise<ChatMessage> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const chat = await this.chatRepository.findOne({ where: { id: id } })
        const chatMessage = this.ormRepository.create(data);
        chatMessage.chat = chat;
        chatMessage.user = user;
        await this.ormRepository.save(chatMessage);

        return chatMessage;
    }

    public async delete(ChatMessageId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(ChatMessageId);
    }
}

export default ChatMessageRepository