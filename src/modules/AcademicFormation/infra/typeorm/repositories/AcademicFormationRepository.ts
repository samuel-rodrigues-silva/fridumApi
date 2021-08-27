import { getRepository, Repository } from "typeorm";
import IAcademicFormationRepository from "../../../repositories/IAcademicFormationRepository";
import { AcademicFomation } from '../entities/AcademicFormation';
import ICreateAcademicFormationDTO from '../../../dtos/ICreateAcademicFormationDTO';
import { User } from "../../../../User/infra/typeorm/entities/User";
import { Profile } from '../../../../Profile/infra/typeorm/entities/Profile';


class AcademicFormationRepository implements IAcademicFormationRepository {
    private ormRepository: Repository<AcademicFomation>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(AcademicFomation);
        this.profileRepository = getRepository(Profile);
    }

    public async findById(userId: User): Promise<AcademicFomation[]> {
        const accomplishment = this.ormRepository.find(userId);

        return accomplishment;
    }

    public async create(data: ICreateAcademicFormationDTO): Promise<AcademicFomation> {
        const profile = await this.profileRepository.findOne({where :{ id :data.profileId } })
        const accomplishment = this.ormRepository.create(data);
        accomplishment.profile = profile;
        await this.ormRepository.save(accomplishment);

        return accomplishment;
    }

    public async update(data: AcademicFomation, accomplishmentId: string): Promise<AcademicFomation> {
        const accomplishment = this.ormRepository.create(data);
        await this.ormRepository.update(accomplishmentId, accomplishment);

        return accomplishment;
    }

    public async delete(accomplishmentId: string): Promise<void> {
        await this.ormRepository.delete(accomplishmentId);

    }
}

export default AcademicFormationRepository