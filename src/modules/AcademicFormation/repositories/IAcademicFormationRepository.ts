
import { DeleteResult } from 'typeorm';
import ICreateAcademicFomationDTO from '../dtos/ICreateAcademicFormationDTO';
import { AcademicFormation } from '../infra/typeorm/entities/AcademicFormation';

export default interface IAccomplishmentRepository {
    create(data: ICreateAcademicFomationDTO): Promise<AcademicFormation>;
    update(data: ICreateAcademicFomationDTO, academicFomationId: string): Promise<void>;
    delete(academicFomationId: string): Promise<DeleteResult>;
}