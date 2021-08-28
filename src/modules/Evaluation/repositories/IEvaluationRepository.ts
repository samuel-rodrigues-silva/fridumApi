
import ICreateEvaluationDTO from '../dtos/ICreateEvaluationDTO';
import { Evaluation } from './../infra/typeorm/entities/Evaluation';

export default interface IEvaluationRepository {
    create(data: ICreateEvaluationDTO): Promise<Evaluation>;
    update(data: ICreateEvaluationDTO, evaluationId: string): Promise<void>;
    delete(evaluationId: string): Promise<void>;
}