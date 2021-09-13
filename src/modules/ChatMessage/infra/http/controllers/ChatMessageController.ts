import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateChatMessageService from './../../../services/CreateChatMessageService';
import { classToClass } from 'class-transformer';
import DeleteChatMessageService from './../../../services/DeleteChatMessageService';

class ChatMessageController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const createChatMessage = container.resolve(CreateChatMessageService)
            const chatMessage = await createChatMessage.execute(request.body, id);
            return response.json(classToClass(chatMessage))
        } catch (err) {
            return response.status(401).send(err.message);
        }

    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteChatMessageService);
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default ChatMessageController;