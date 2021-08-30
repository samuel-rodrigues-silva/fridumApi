import { getRepository, Repository } from "typeorm";
import { Chat } from './../entities/Chat';
import ICreateChatDTO from './../../../dtos/ICreateChatDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';
import IChatRepository from "../../../repositories/IChatRepository";


class ChatRepository implements IChatRepository {
    private ormRepository: Repository<Chat>;
    private userRepository: Repository<User>;
    private followRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Chat);
        this.userRepository = getRepository(User);
        this.followRepository = getRepository(User);
    }

    public async create(data: ICreateChatDTO): Promise<Chat | null> {
        const user = await this.userRepository.findOne({where : {id : data.userId}})
        const follow = await this.followRepository.findOne({where : {id : data.followId}})
        const chat = await this.ormRepository.findOne({where : {user: user, follow: follow}})

        if(!chat){
            const chatReg = this.ormRepository.create();
            chatReg.user = user;
            chatReg.follow = follow;
            return await this.ormRepository.save(chatReg);
        }
        console.log('already register')
        return null
    }

    public async delete(ChatId: string): Promise<void> {
        await this.ormRepository.delete(ChatId);
    }
}

export default ChatRepository