import { DeleteResult, getConnection, getRepository, Repository, UpdateResult } from "typeorm";
import IFollowRepository from "../../../repositories/IFollowRepository";
import { Follow } from './../entities/Follow';
import ICreateFollowDTO from './../../../dtos/ICreateFollowDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';


class FollowRepository implements IFollowRepository {
    private ormRepository: Repository<Follow>;
    private userFollowedRepository: Repository<User>;
    private userRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Follow);
        this.userFollowedRepository = getRepository(User);
        this.userRepository = getRepository(User);
    }

    public async listByPending(id: string): Promise<Follow[]> {
        return await this.ormRepository.find({ where: { follow: id, status: 'pending' }, relations: ['user'] })

    }

    public async list(id: string): Promise<Follow[]> {
        const following = await this.ormRepository.find({ where: { follow: id, status: 'accepted' }, relations: ['user'] })
        const followed = await this.ormRepository.find({ where: { user: id, status: 'accepted' }, relations: ['user'] })
        return following.concat(followed)
    }

    public async update(data: ICreateFollowDTO, id: string): Promise<UpdateResult> {
        return await getConnection()
            .createQueryBuilder()
            .update(Follow)
            .set(data)
            .where("id = :id", { id: id })
            .execute();
    }

    public async create(data: ICreateFollowDTO): Promise<Follow | null> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const userFollowed = await this.userFollowedRepository.findOne({ where: { id: data.followId } })
        const follow = await this.ormRepository.findOne({ where: { user: user, follow: userFollowed } })

        if (!follow) {
            const followReg = this.ormRepository.create();
            followReg.user = user;
            followReg.follow = userFollowed;
            follow.status = 'pending';
            return await this.ormRepository.save(followReg);
        }
        return null
    }

    public async delete(FollowId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(FollowId);
    }
}

export default FollowRepository