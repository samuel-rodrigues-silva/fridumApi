import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Chat } from '../../typeorm/entities/Chat';

class ChatController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Chat);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
        }
    }
}

export default ChatController;