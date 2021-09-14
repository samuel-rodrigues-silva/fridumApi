import { injectable, inject, delay } from 'tsyringe';
import IMeetingRepository from './../repositories/IMeetingRepository';
import MeetingRepository from '../infra/typeorm/repositories/MeetingRepository';
import ICreateMeetingDTO from './../dtos/ICreateMeetingDTO';

@injectable()
class ListMeetingService {
    constructor(
        @inject(delay(() => MeetingRepository))
        private meetingRepository: IMeetingRepository,
    ) { }

    public async execute(id: string): Promise<void> {
        await this.meetingRepository.list(id);
    }
}

export default ListMeetingService