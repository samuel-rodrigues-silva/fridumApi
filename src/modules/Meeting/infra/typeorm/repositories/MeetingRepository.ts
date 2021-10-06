import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IMeetingRepository from "../../../repositories/IMeetingRepository";
import { Meeting } from './../entities/Meeting';
import ICreateMeetingDTO from './../../../dtos/ICreateMeetingDTO';
import { User } from './../../../../User/infra/typeorm/entities/User';


class MeetingRepository implements IMeetingRepository {
    private ormRepository: Repository<Meeting>;
    private userRepository: Repository<User>;
    private followRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Meeting);
        this.userRepository = getRepository(User);
        this.followRepository = getRepository(User);
    }

    public async list(id: string): Promise<Meeting[]> {
        const user = await this.userRepository.findOne({ where: { id: id } });
        const userMeetingsList = await this.ormRepository.find({ where: { user: user }, relations: ['user', 'user.profile', 'follow', 'follow.profile'] });
        const followMeetingsList = await this.ormRepository.find({ where: { follow: user }, relations: ['user', 'user.profile', 'follow', 'follow.profile'] });
        const newList = userMeetingsList.concat(followMeetingsList);
        console.log(newList)
        return newList
        // const user = await this.userRepository.findOne({ where: { id } })
        // const userMeetingList = await this.ormRepository.find({ where: { user: user }, relations: ['user', 'follow'] })
        // const followMeetingList = await this.ormRepository.find({ where: { follow: user }, relations: ['user', 'follow'] })
        // return userMeetingList.concat(followMeetingList)
    }

    public async create(data: ICreateMeetingDTO, id: string): Promise<Meeting> {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const follow = await this.followRepository.findOne({ where: { id: data.followId } })
        const meeting = this.ormRepository.create(data);
        meeting.user = user;
        meeting.follow = follow;
        return await this.ormRepository.save(meeting);
    }

    public async update(data: ICreateMeetingDTO, id: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Meeting)
            .set(data)
            .where("id = :id", { id: id })
            .execute();
    }

    public async delete(id: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(id);
    }
}

export default MeetingRepository