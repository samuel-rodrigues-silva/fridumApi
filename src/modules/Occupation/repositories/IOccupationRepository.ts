
import ICreateOccupationDTO from '../dtos/ICreateOccupationDTO';
import { Occupation } from './../infra/typeorm/entities/Occupation';

export default interface IOccupationRepository {
    create(data: ICreateOccupationDTO): Promise<Occupation>;
    update(data: ICreateOccupationDTO, occupationId: string): Promise<void>;
    delete(occupationId: string): Promise<void>;
}