import { getRepository, Repository } from "typeorm";
import { Chat } from './../entities/Chat';
import ICreateChatDTO from './../../../dtos/ICreateChatDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';
import IChatRepository from "../../../repositories/IChatRepository";
import { Service } from './../../../../Service/infra/typeorm/entities/Service';

class ChatRepository implements IChatRepository {
    private ormRepository: Repository<Chat>;
    private userRepository: Repository<User>;
    private followRepository: Repository<User>;
    private serviceRepository: Repository<Service>;

    constructor() {
        this.ormRepository = getRepository(Chat);
        this.userRepository = getRepository(User);
        this.followRepository = getRepository(User);
        this.serviceRepository = getRepository(Service);
    }

    public async show(id: string): Promise<Chat[]> {
        return await this.ormRepository.find({ where: { id: id }, relations: ['user', 'follow', 'chatMessage', 'chatMessage.user'] });
    }

    public async list(id: string): Promise<Chat[]> {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const chatByUserList = await this.ormRepository.find({ where: { user: user }, relations: ['user', 'follow', 'service'] })
        const chatByFollowList = await this.ormRepository.find({ where: { follow: user }, relations: ['user', 'follow', 'service'] })
        return chatByUserList.concat(chatByFollowList)
    }

    public async create(data: ICreateChatDTO): Promise<Chat | null> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const follow = await this.followRepository.findOne({ where: { id: data.followId } })
        const service = await this.serviceRepository.findOne({ where: { id: data.serviceId } })
        const chat = await this.ormRepository.findOne({
            where: {
                user: user,
                follow: follow,
            }
        })

        if (!chat) {
            const chatReg = this.ormRepository.create();
            chatReg.user = user;
            chatReg.follow = follow;
            chatReg.service = service;
            chatReg.chatMessage = []
            return await this.ormRepository.save(chatReg);
        }
        return null
    }

    public async delete(ChatId: string): Promise<void> {
        await this.ormRepository.delete(ChatId);
    }
}

export default ChatRepository