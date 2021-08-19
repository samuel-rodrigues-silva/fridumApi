import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import { Session } from '../../typeorm/entities/Session';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import CreateSessionService from '../../../services/CreateSessionService';
import DeleteSessionService from './../../../services/DeleteSessionService';
import UpdateSessionService from './../../../services/UpdateSessionService';

class SessionController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password, user_id } = request.body
            const repo = getRepository(Session);

            const userExists = await repo.findOne({ where: { email } })

            if (userExists) {
                return response.status(409).send("Email already exists")
            } else {
                const session = container.resolve(CreateSessionService)
                const resp = await session.execute({ email, password, user_id });
                return response.status(201).json(resp)
            }

        } catch (error) {
            return response.send('ERROR:' + error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async auth(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body
            const repo = getRepository(Session);

            const session = await repo.findOne({ where: { email }, relations: ['user'] })
            if (!session) {
                return response.status(409).send('Email not found')
            }

            const isPasswordValid = await bcrypt.compare(password, session.password)
            const token = jwt.sign({ id: session.id }, process.env.ENCRYPT_HASH, { expiresIn: '16h' })

            if (!isPasswordValid) {
                return response.status(409).send('Invalid password')
            }

            return response.status(200).send({
                id: session.id,
                email: session.email,
                token: token,
                user: session.user
            })

        } catch (error) {
            return response.send('ERROR:' + error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const repo = getRepository(Session);
            const res = await repo.findOne({ where: { id: id }, relations: ['user'] });
            return response.status(201).send(res);
        } catch (error) {
            console.log("errorMessage =>", error.message);
            return response.send(error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { email, password } = request.body
            const repo = getRepository(Session);
            const findSession = await repo.findOne(id);

            if (findSession) {
                const session = container.resolve(UpdateSessionService)
                const res = await session.execute({ email, password }, id);
                return response.status(200).send(res);
            }

        } catch (error) {
            return response.send(error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const repo = container.resolve(DeleteSessionService)
            await repo.execute(id);
            return response.status(200);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default SessionController;