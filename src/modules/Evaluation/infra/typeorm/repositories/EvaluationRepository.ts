import { getConnection, getRepository, Repository } from "typeorm";
import IEvaluationRepository from "../../../repositories/IEvaluationRepository";
import { Evaluation } from './../entities/Evaluation';
import ICreateEvaluationDTO from './../../../dtos/ICreateEvaluationDTO';
import { Service } from './../../../../Service/infra/typeorm/entities/Service';


class EvaluationRepository implements IEvaluationRepository {
    private ormRepository: Repository<Evaluation>;
    private serviceRepository: Repository<Service>;

    constructor() {
        this.ormRepository = getRepository(Evaluation);
        this.serviceRepository = getRepository(Service);
    }

    public async create(data: ICreateEvaluationDTO): Promise<Evaluation> {
        const service = await this.serviceRepository.findOne({where :{ id : data.serviceId } })
        const Evaluation = this.ormRepository.create(data);
        Evaluation.service = service;
        await this.ormRepository.save(Evaluation);

        return Evaluation;
    }

    public async update(data: ICreateEvaluationDTO, evaluationId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Evaluation)
            .set(data)
            .where("id = :id", { id: evaluationId })
            .execute();
    }

    public async delete(evaluationId: string): Promise<void> {
        await this.ormRepository.delete(evaluationId);
    }
}

export default EvaluationRepository