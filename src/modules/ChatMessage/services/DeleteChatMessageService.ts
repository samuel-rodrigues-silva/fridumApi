import { injectable, inject, delay } from 'tsyringe';
import { DeleteResult } from 'typeorm';
import ChatMessageRepository from './../infra/typeorm/repositories/ChatMessageRepository';
import IChatMessageRepository from './../repositories/IChatMessageRepository';

@injectable()
export default class DeleteChatMessageService {
    constructor(
        @inject(delay(() => ChatMessageRepository))
        private chatMessageRepository: IChatMessageRepository) { }

    public async execute(id: string): Promise<DeleteResult> {
        return await this.chatMessageRepository.delete(id);
    }
}