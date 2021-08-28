import { injectable, inject, delay } from 'tsyringe';
import IEvaluationRepository from './../repositories/IEvaluationRepository';
import EvaluationRepository from '../infra/typeorm/repositories/EvaluationRepository';
import ICreateEvaluationDTO from './../dtos/ICreateEvaluationDTO';

@injectable()
class UpdateEvaluationService {
    constructor(
        @inject(delay(() => EvaluationRepository))
        private evaluationRepository: IEvaluationRepository,
    ) { }

    public async execute(data: ICreateEvaluationDTO, id: string): Promise<void> {
        await this.evaluationRepository.update(data, id);
    }
}

export default UpdateEvaluationService