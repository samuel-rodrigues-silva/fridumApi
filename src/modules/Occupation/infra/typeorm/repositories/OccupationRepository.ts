import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IOccupationRepository from "../../../repositories/IOccupationRepository";
import { Occupation } from './../entities/Occupation';
import ICreateOccupationDTO from './../../../dtos/ICreateOccupationDTO';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';


class OccupationRepository implements IOccupationRepository {
    private ormRepository: Repository<Occupation>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(Occupation);
        this.profileRepository = getRepository(Profile);
    }

    public async create(data: ICreateOccupationDTO): Promise<Occupation> {
        const profile = await this.profileRepository.findOne({ where: { id: data.profileId } })
        const Occupation = this.ormRepository.create(data);
        Occupation.profile = profile;
        await this.ormRepository.save(Occupation);

        return Occupation;
    }

    public async update(data: ICreateOccupationDTO, OccupationId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Occupation)
            .set(data)
            .where("id = :id", { id: OccupationId })
            .execute();
    }

    public async delete(OccupationId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(OccupationId);
    }
}

export default OccupationRepository