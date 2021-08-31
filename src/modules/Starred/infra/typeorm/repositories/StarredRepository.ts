import { DeleteResult, getRepository, Repository } from "typeorm";
import IStarredRepository from "../../../repositories/IStarredRepository";
import { Starred } from './../entities/Starred';
import ICreateStarredDTO from './../../../dtos/ICreateStarredDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';
import { Post } from './../../../../Post/infra/typeorm/entities/Post';


class StarredRepository implements IStarredRepository {
    private ormRepository: Repository<Starred>;
    private userRepository: Repository<User>;
    private postRepository: Repository<Post>;

    constructor() {
        this.ormRepository = getRepository(Starred);
        this.userRepository = getRepository(User);
        this.postRepository = getRepository(Post);
    }

    public async create(data: ICreateStarredDTO): Promise<Starred | null> {
        const user = await this.userRepository.findOne({ where: { id: data.userId } })
        const post = await this.postRepository.findOne({ where: { id: data.postId } })
        const starred = await this.ormRepository.findOne({ where: { user: user, post: post } })

        if (!starred) {
            const StarredReg = this.ormRepository.create();
            StarredReg.user = user;
            StarredReg.post = post;
            return await this.ormRepository.save(StarredReg);
        }
        console.log('already register')
        return null
    }

    public async delete(StarredId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(StarredId);
    }
}

export default StarredRepository