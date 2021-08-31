import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IAcademicFormationRepository from "../../../repositories/IAcademicFormationRepository";
import { AcademicFormation } from './../entities/AcademicFormation';
import ICreateAcademicFormationDTO from './../../../dtos/ICreateAcademicFormationDTO';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';


class AcademicFormationRepository implements IAcademicFormationRepository {
    private ormRepository: Repository<AcademicFormation>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(AcademicFormation);
        this.profileRepository = getRepository(Profile);
    }

    public async create(data: ICreateAcademicFormationDTO): Promise<AcademicFormation> {
        const profile = await this.profileRepository.findOne({ where: { id: data.profileId } })
        const academicFormation = this.ormRepository.create(data);
        academicFormation.profile = profile;
        await this.ormRepository.save(academicFormation);

        return academicFormation;
    }

    public async update(data: ICreateAcademicFormationDTO, academicFormationId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(AcademicFormation)
            .set(data)
            .where("id = :id", { id: academicFormationId })
            .execute();
    }

    public async delete(academicFormationId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(academicFormationId)
    }
}

export default AcademicFormationRepository