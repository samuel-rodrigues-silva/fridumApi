import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import EvaluationRepository from './../infra/typeorm/repositories/EvaluationRepository';
import IEvaluationRepository from './../repositories/IEvaluationRepository';

@injectable()
export default class DeleteEvaluationService {
    constructor(
        @inject(delay(() => EvaluationRepository))
        private evaluationRepository: IEvaluationRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.evaluationRepository.delete(id);
    }
}