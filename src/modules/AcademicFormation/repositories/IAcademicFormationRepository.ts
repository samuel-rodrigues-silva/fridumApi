
import ICreateAcademicFomationDTO from '../dtos/ICreateAcademicFormationDTO';
import { User } from '../../User/infra/typeorm/entities/User';
import { AcademicFomation } from '../infra/typeorm/entities/AcademicFormation';

export default interface IAccomplishmentRepository {
    findById(userId: User): Promise<AcademicFomation[]>;
    create(data: ICreateAcademicFomationDTO): Promise<AcademicFomation>;
    update(data: AcademicFomation, academicFomationId: string): Promise<AcademicFomation>;
    delete(academicFomationId: string): Promise<void>;
}