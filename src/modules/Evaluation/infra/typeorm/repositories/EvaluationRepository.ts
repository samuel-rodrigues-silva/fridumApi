import { DeleteResult, getConnection, getRepository, Repository } from "typeorm";
import IEvaluationRepository from "../../../repositories/IEvaluationRepository";
import { Evaluation } from './../entities/Evaluation';
import ICreateEvaluationDTO from './../../../dtos/ICreateEvaluationDTO';
import { Service } from './../../../../Service/infra/typeorm/entities/Service';
import { User } from './../../../../User/infra/typeorm/entities/User';


class EvaluationRepository implements IEvaluationRepository {
    private ormRepository: Repository<Evaluation>;
    private serviceRepository: Repository<Service>;
    private userRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Evaluation);
        this.serviceRepository = getRepository(Service);
        this.userRepository = getRepository(User);
    }

    public async create(data: ICreateEvaluationDTO, id: string): Promise<Evaluation> {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const service = await this.serviceRepository.findOne({ where: { id: data.serviceId } })
        const evaluation = this.ormRepository.create(data);
        evaluation.service = service;
        evaluation.user = user;
        await this.ormRepository.save(evaluation);

        return evaluation;
    }

    public async update(data: ICreateEvaluationDTO, evaluationId: string): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .update(Evaluation)
            .set(data)
            .where("id = :id", { id: evaluationId })
            .execute();
    }

    public async delete(evaluationId: string): Promise<DeleteResult> {
        return await this.ormRepository.delete(evaluationId);
    }
}

export default EvaluationRepository