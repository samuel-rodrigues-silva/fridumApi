import { injectable, inject, delay } from 'tsyringe';
import { Meeting } from '../infra/typeorm/entities/Meeting';
import IMeetingRepository from '../repositories/IMeetingRepository';
import ICreateMeetingDTO from '../dtos/ICreateMeetingDTO';
import MeetingRepository from '../infra/typeorm/repositories/MeetingRepository';

@injectable()
class CreateMeetingService {

    constructor(
        @inject(delay(() => MeetingRepository))
        private meetingRepository: IMeetingRepository) { }

    public async execute(
        data: ICreateMeetingDTO,
        id: string
    ): Promise<Meeting> {
        return await this.meetingRepository.create(data, id);
    }
}

export default CreateMeetingService