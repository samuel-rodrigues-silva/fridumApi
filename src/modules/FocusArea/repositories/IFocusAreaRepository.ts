import { DeleteResult } from 'typeorm';
import ICreateFocusAreaDTO from '../dtos/ICreateFocusAreaDTO';
import { FocusArea } from './../infra/typeorm/entities/FocusArea';

export default interface IFocusAreaRepository {
    create(data: ICreateFocusAreaDTO): Promise<FocusArea>;
    update(data: ICreateFocusAreaDTO, focusAreaId: string): Promise<void>;
    delete(focusAreaId: string): Promise<DeleteResult>;
}