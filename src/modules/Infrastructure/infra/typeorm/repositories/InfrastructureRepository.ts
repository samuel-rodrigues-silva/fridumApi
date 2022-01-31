import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IInfrastructureRepository from "../../../repositories/IInfrastructureRepository";
import { Infrastructure } from './../entities/Infrastructure';
import ICreateInfrastructureDTO from './../../../dtos/ICreateInfrastructureDTO';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';


class InfrastructureRepository implements IInfrastructureRepository {
    private ormRepository: Repository<Infrastructure>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(Infrastructure);
        this.profileRepository = getRepository(Profile);
    }

    public async create(data: ICreateInfrastructureDTO): Promise<Infrastructure> {
        const profile = await this.profileRepository.findOne({ where: { id: data.profileId } })
        const infrastructure = this.ormRepository.create(data);
        infrastructure.profile = profile;
        await this.ormRepository.save(infrastructure);

        return infrastructure;
    }

    public async update(data: ICreateInfrastructureDTO, infrastructureId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Infrastructure)
            .set(data)
            .where("id = :id", { id: infrastructureId })
            .execute();
    }

    public async delete(InfrastructureId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(InfrastructureId);
    }
}

export default InfrastructureRepository