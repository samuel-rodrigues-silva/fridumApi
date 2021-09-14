
import { DeleteResult } from 'typeorm';
import ICreateMeetingDTO from '../dtos/ICreateMeetingDTO';
import { Meeting } from './../infra/typeorm/entities/Meeting';

export default interface IMeetingRepository {
    list(id: string): Promise<Meeting[]>
    create(data: ICreateMeetingDTO, id: string): Promise<Meeting>;
    update(data: ICreateMeetingDTO, MeetingId: string): Promise<void>;
    delete(MeetingId: string): Promise<DeleteResult>;
}