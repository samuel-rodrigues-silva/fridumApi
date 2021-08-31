
import { DeleteResult } from 'typeorm';
import ICreateEvaluationDTO from '../dtos/ICreateEvaluationDTO';
import { Evaluation } from './../infra/typeorm/entities/Evaluation';

export default interface IEvaluationRepository {
    create(data: ICreateEvaluationDTO, id: string): Promise<Evaluation>;
    update(data: ICreateEvaluationDTO, evaluationId: string): Promise<void>;
    delete(evaluationId: string): Promise<DeleteResult>;
}