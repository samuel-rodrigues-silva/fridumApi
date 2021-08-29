import { injectable, inject, delay } from 'tsyringe';
import IEvaluationRepository from './../repositories/IEvaluationRepository';
import { Evaluation } from './../infra/typeorm/entities/Evaluation';
import ICreateEvaluationDTO from './../dtos/ICreateEvaluationDTO';
import EvaluationRepository from '../infra/typeorm/repositories/EvaluationRepository';

@injectable()
class CreateEvaluationService {
    constructor(
        @inject(delay(() => EvaluationRepository))
        private evaluationRepository: IEvaluationRepository,
    ) { }

    public async execute(data: ICreateEvaluationDTO, id: string): Promise<Evaluation> {
        return await this.evaluationRepository.create(data, id);
    }
}

export default CreateEvaluationService