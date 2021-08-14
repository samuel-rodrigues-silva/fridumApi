import { getRepository, Repository } from "typeorm";
import IAccomplishmentRepository from "../../../repositories/IAccomplishmentRepository";
import { Accomplishment } from './../entities/Accomplishment';
import ICreateAcomplishmentDTO from './../../../dtos/ICreateAccomplishmentDTO';
import { User } from "../../../../User/infra/typeorm/entities/User";


class AccomplishmentRepository implements IAccomplishmentRepository {
    private ormRepository: Repository<Accomplishment>;

    constructor() {
        this.ormRepository = getRepository(Accomplishment);
    }

    public async findById(userId: User): Promise<Accomplishment[]> {
        const accomplishment = this.ormRepository.find(userId);

        return accomplishment;
    }

    public async create(data: ICreateAcomplishmentDTO): Promise<Accomplishment> {
        const accomplishment = this.ormRepository.create(data);
        await this.ormRepository.save(accomplishment);

        return accomplishment;
    }

    public async update(data: Accomplishment, accomplishmentId: string): Promise<Accomplishment> {
        const accomplishment = this.ormRepository.create(data);
        await this.ormRepository.update(accomplishmentId, accomplishment);

        return accomplishment;
    }

    public async delete(accomplishmentId: string): Promise<void> {
        await this.ormRepository.delete(accomplishmentId);

    }
}

export default AccomplishmentRepository