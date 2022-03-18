import { getConnection, getRepository, Repository } from "typeorm";
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
        return await this.ormRepository.find(
            {
                where: { id: id },
                relations: [
                    'user',
                    'user.profile',
                    'follow',
                    'follow.profile',
                    'chatMessage',
                    'chatMessage.user',
                    'service',
                    'service.user',
                    'service.follow',
                    'service.post'
                ]
            });
    }

    public async list(id: string): Promise<Chat[]> {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const chatByUserList = await this.ormRepository.find({ where: { user: user }, relations: ['user', 'user.profile', 'follow', 'follow.profile', 'service', 'chatMessage', 'chatMessage.user'] })
        const chatByFollowList = await this.ormRepository.find({ where: { follow: user }, relations: ['user', 'user.profile', 'follow', 'follow.profile', 'service', 'chatMessage', 'chatMessage.user'] })
        let concatenatedChatLists: Chat[] = chatByUserList.concat(chatByFollowList);
        return concatenatedChatLists
    }

    public async fetchChatsTotalMessagesUnread(id: string): Promise<
        { totalFollowChatsWithMessagesUnread: number, totalUserChatsWithMessagesUnread: number }
    > {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const chatByUserList = await this.ormRepository.find({ where: { user: user }, relations: ['chatMessage'] })
        const chatByFollowList = await this.ormRepository.find({ where: { follow: user }, relations: ['chatMessage'] })
        let totalFollowChatsWithMessagesUnread = 0;
        let totalUserChatsWithMessagesUnread = 0;
        chatByUserList.map((chat) => {
            if (chat.chatMessage[chat.chatMessage.length - 1]) {
                totalUserChatsWithMessagesUnread++
            }
        })
        chatByFollowList.map((chat) => {
            if (chat.chatMessage[chat.chatMessage.length - 1]) {
                totalFollowChatsWithMessagesUnread++
            }
        })
        return {
            totalFollowChatsWithMessagesUnread,
            totalUserChatsWithMessagesUnread
        }
    }

    public async create(data: ICreateChatDTO): Promise<Chat | null> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const follow = await this.followRepository.findOne({ where: { id: data.followId } })
        const service = await this.serviceRepository.findOne({ where: { id: data.serviceId } })
        const chat = await this.ormRepository.findOne({
            where: {
                user: user,
                follow: follow,
            },
        })
        const chatFollow = await this.ormRepository.findOne({
            where: {
                user: follow,
                follow: user,
            },
        })

        if (!chat && !chatFollow) {
            const chatReg = this.ormRepository.create();
            chatReg.user = user;
            chatReg.follow = follow;
            chatReg.service = [];
            chatReg.service.push(service);
            chatReg.chatMessage = []
            return await this.ormRepository.save(chatReg);
        } else {
            service.chat = chat
            const id = service.id
            await getConnection()
                .createQueryBuilder()
                .update(Service)
                .set(service)
                .where("id = :id", { id })
                .execute()
            return null
        }
    }

    public async delete(ChatId: string): Promise<void> {
        await this.ormRepository.delete(ChatId);
    }
}

export default ChatRepository