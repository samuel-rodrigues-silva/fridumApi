import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IFocusAreaRepository from "../../../repositories/IFocusAreaRepository";
import { FocusArea } from './../entities/FocusArea';
import ICreateFocusAreaDTO from './../../../dtos/ICreateFocusAreaDTO';
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';


class FocusAreaRepository implements IFocusAreaRepository {
    private ormRepository: Repository<FocusArea>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.ormRepository = getRepository(FocusArea);
        this.profileRepository = getRepository(Profile);
    }

    public async create(data: ICreateFocusAreaDTO): Promise<FocusArea> {
        const profile = await this.profileRepository.findOne({ where: { id: data.profileId } })
        const focusArea = this.ormRepository.create(data);
        focusArea.profile = profile;
        await this.ormRepository.save(focusArea);

        return focusArea;
    }

    public async update(data: ICreateFocusAreaDTO, focusAreaId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(FocusArea)
            .set(data)
            .where("id = :id", { id: focusAreaId })
            .execute();
    }

    public async delete(focusAreaId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(focusAreaId);
    }
}

export default FocusAreaRepository