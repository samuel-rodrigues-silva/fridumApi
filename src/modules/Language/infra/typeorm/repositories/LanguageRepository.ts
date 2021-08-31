import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import ILanguageRepository from "../../../repositories/ILanguageRepository";
import { Language } from './../entities/Language';
import ICreateLanguageDTO from './../../../dtos/ICreateLanguageDTO';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';

class LanguageRepository implements ILanguageRepository {
    private ormRepository: Repository<Language>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(Language);
        this.profileRepository = getRepository(Profile);
    }

    public async create(data: ICreateLanguageDTO): Promise<Language> {
        const profile = await this.profileRepository.findOne({ where: { id: data.profileId } })
        const Language = this.ormRepository.create(data);
        Language.profile = profile;
        await this.ormRepository.save(Language);

        return Language;
    }

    public async update(data: ICreateLanguageDTO, LanguageId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Language)
            .set(data)
            .where("id = :id", { id: LanguageId })
            .execute();
    }

    public async delete(LanguageId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(LanguageId);
    }
}

export default LanguageRepository