import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateChatService from './../../../services/CreateChatService';
import { classToClass } from 'class-transformer';
import DeleteChatService from './../../../services/DeleteChatService';

class ChatController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createChat = container.resolve(CreateChatService)
            const Chat = await createChat.execute(request.body);
            return response.json(classToClass(Chat))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const repo = container.resolve(DeleteChatService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default ChatController;