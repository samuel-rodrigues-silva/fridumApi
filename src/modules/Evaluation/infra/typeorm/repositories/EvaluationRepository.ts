import { DeleteResult, getConnection, getManager, getRepository, Repository } from "typeorm";
import IEvaluationRepository from "../../../repositories/IEvaluationRepository";
import { Evaluation } from './../entities/Evaluation';
import ICreateEvaluationDTO from './../../../dtos/ICreateEvaluationDTO';
import { Service } from './../../../../Service/infra/typeorm/entities/Service';
import { User } from './../../../../User/infra/typeorm/entities/User';


class EvaluationRepository implements IEvaluationRepository {
    private ormRepository: Repository<Evaluation>;
    private serviceRepository: Repository<Service>;
    private userRepository: Repository<User>;
    private followRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(Evaluation);
        this.serviceRepository = getRepository(Service);
        this.userRepository = getRepository(User);
        this.followRepository = getRepository(User);
    }

    public async list(id: string): Promise<Object> {
        const rating = await getManager().query(`
        SELECT SUM(rating) AS rating FROM evaluation where followId = "${id}";
      `);
        console.log(rating.rating)
        const evaluation = await this.ormRepository.find({ where: { follow: id }, relations: ['user', 'service'] },)
        return { evaluation, rating }
    }

    public async create(data: ICreateEvaluationDTO, id: string): Promise<Evaluation> {
        const user = await this.userRepository.findOne({ where: { id: id } })
        const follow = await this.userRepository.findOne({ where: { id: data.followId } })
        const service = await this.serviceRepository.findOne({ where: { id: data.serviceId } })
        const evaluation = this.ormRepository.create(data);
        evaluation.service = service;
        evaluation.user = user;
        evaluation.follow = follow;
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