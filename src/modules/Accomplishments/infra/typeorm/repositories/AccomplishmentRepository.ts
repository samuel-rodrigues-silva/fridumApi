import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IAccomplishmentRepository from "../../../repositories/IAccomplishmentRepository";
import { Accomplishment } from './../entities/Accomplishment';
import ICreateAccomplishmentDTO from './../../../dtos/ICreateAccomplishmentDTO';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';


class AccomplishmentRepository implements IAccomplishmentRepository {
    private ormRepository: Repository<Accomplishment>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(Accomplishment);
        this.profileRepository = getRepository(Profile);
    }

    public async create(data: ICreateAccomplishmentDTO): Promise<Accomplishment> {
        const profile = await this.profileRepository.findOne({ where: { id: data.profileId } })
        const accomplishment = this.ormRepository.create(data);
        accomplishment.profile = profile;
        await this.ormRepository.save(accomplishment);

        return accomplishment;
    }

    public async update(data: ICreateAccomplishmentDTO, accomplishmentId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Accomplishment)
            .set(data)
            .where("id = :id", { id: accomplishmentId })
            .execute();
    }

    public async delete(accomplishmentId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(accomplishmentId);
    }
}

export default AccomplishmentRepository