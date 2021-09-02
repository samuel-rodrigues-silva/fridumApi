import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
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
    private followRepository: Repository<Follow>;

    constructor() {
        this.ormRepository = getRepository(Service);
        this.userRepository = getRepository(User);
        this.postRepository = getRepository(Post);
        this.followRepository = getRepository(Follow);
    }

    public async findById(id: string): Promise<Service[]> {
        return await this.ormRepository.find({ where: { user: id }, });
    }

    public async create(data: ICreateServiceDTO): Promise<Service> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const post = await this.postRepository.findOne({ where: { id: data.postId } })
        const service = this.ormRepository.create(data);
        service.user = user;
        service.post = post;
        return await this.ormRepository.save(service);
    }

    public async update(data: ICreateServiceDTO, ServiceId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Service)
            .set(data)
            .where("id = :id", { id: ServiceId })
            .execute();
    }

    public async delete(ServiceId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(ServiceId);
    }
}

export default ServiceRepository