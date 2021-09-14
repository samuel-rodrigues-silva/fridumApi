import { injectable, inject, delay } from 'tsyringe';
import IMeetingRepository from './../repositories/IMeetingRepository';
import MeetingRepository from '../infra/typeorm/repositories/MeetingRepository';
import ICreateMeetingDTO from './../dtos/ICreateMeetingDTO';

@injectable()
class UpdateMeetingService {
    constructor(
        @inject(delay(() => MeetingRepository))
        private meetingRepository: IMeetingRepository,
    ) { }

    public async execute(data: ICreateMeetingDTO, id: string): Promise<void> {
        await this.meetingRepository.update(data, id);
    }
}

export default UpdateMeetingService