import { DeleteResult, getConnection, getRepository, Repository, UpdateResult } from "typeorm";
import IServiceRepository from "../../../repositories/IServiceRepository";
import { Service } from './../entities/Service';
import ICreateServiceDTO from './../../../dtos/ICreateServiceDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';
import UserRepository from './../../../../User/infra/typeorm/repositories/UserRepository';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';
import { Follow } from './../../../../Follow/infra/typeorm/entities/Follow';
import { Post } from './../../../../Post/infra/typeorm/entities/Post';

class ServiceRepository implements IServiceRepository {
    private ormRepository: Repository<Service>;
    private userRepository: Repository<User>;
    private postRepository: Repository<Post>;
    private followRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Service);
        this.userRepository = getRepository(User);
        this.postRepository = getRepository(Post);
        this.followRepository = getRepository(User);
    }
    public async fetchUnreadServices(id: string): Promise<string> {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const countingUser = await this.ormRepository.findAndCount({ where: { user: user, unread: true } })
        const countingFollow = await this.ormRepository.findAndCount({ where: { follow: user, unread: true } })
        console.log('USER' + (countingUser[1]))
        console.log('FOLLOW' + (countingFollow[1]))
        return (Number(countingUser[1]) + Number(countingFollow[1])).toString();
    }

    public async findById(id: string): Promise<Service[]> {
        return await this.ormRepository.find({ where: { user: id }, relations: ['user', 'user.profile', 'post', 'follow', 'follow.profile'] });
    }

    public async findByFollowId(id: string): Promise<Service[]> {
        return await this.ormRepository.find({ where: { follow: id }, relations: ['user', 'user.profile', 'post', 'follow', 'follow.profile'] });
    }

    public async create(data: ICreateServiceDTO): Promise<Service> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const post = await this.postRepository.findOne({ where: { id: data.postId } })
        const follow = await this.followRepository.findOne({ where: { id: data.followId } })
        const services = await this.ormRepository.findOne({ where: { post: post, follow: follow } })
        if (services) {
            return null
        }
        const service = this.ormRepository.create(data);
        service.user = user;
        service.post = post;
        service.follow = follow
        service.unread = true
        return await this.ormRepository.save(service);
    }

    public async update(data: ICreateServiceDTO, id: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Service)
            .set(data)
            .where("id = :id", { id })
            .execute()
    }

    public async delete(ServiceId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(ServiceId);
    }
}

export default ServiceRepository