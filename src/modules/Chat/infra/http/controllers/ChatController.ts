import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateChatService from './../../../services/CreateChatService';
import { classToClass } from 'class-transformer';
import DeleteChatService from './../../../services/DeleteChatService';
import ListChatService from '../../../services/ListChatService';
import ShowChatService from '../../../services/ShowChatService';
import FetchChatsTotalMessagesUnread from '../../../services/fetchChatsTotalMessagesUnread';

class ChatController {

    public async show(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const showChat = container.resolve(ShowChatService)
            const chat = await showChat.execute(id);
            return response.json(classToClass(chat))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async fetchChatsTotalMessagesUnread(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const totalUnread = container.resolve(FetchChatsTotalMessagesUnread)
            const chat = await totalUnread.execute(id);
            return response.json(classToClass(chat))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async fetchById(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const createChat = container.resolve(ListChatService)
            const chat = await createChat.execute(id);
            return response.json(classToClass(chat))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const createChat = container.resolve(CreateChatService)
            const chat = await createChat.execute(request.body);
            if (chat === null) {
                return response.send('Chat already exists')
            }
            return response.json(classToClass(chat))
        } catch (err) {
            return response.status(401).send(err.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = container.resolve(DeleteChatService);
            await repo.execute(id);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default ChatController;