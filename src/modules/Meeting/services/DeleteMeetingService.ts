import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import MeetingRepository from './../infra/typeorm/repositories/MeetingRepository';
import IMeetingRepository from './../repositories/IMeetingRepository';

@injectable()
export default class DeleteMeetingService {
    constructor(
        @inject(delay(() => MeetingRepository))
        private meetingRepository: IMeetingRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.meetingRepository.delete(id);
    }
}