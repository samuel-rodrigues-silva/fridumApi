import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import { Session } from '../../typeorm/entities/Session';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import CreateSessionService from '../../../services/CreateSessionService';
import DeleteSessionService from './../../../services/DeleteSessionService';
import UpdateSessionService from './../../../services/UpdateSessionService';
import { classToClass } from 'class-transformer';
import path from 'path';

class SessionController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password, userId } = request.body
            const repo = getRepository(Session);

            const userExists = await repo.findOne({ where: { email } })

            if (userExists) {
                return response.status(409).send("Email already exists")
            } else {
                const session = container.resolve(CreateSessionService)
                const resp = await session.execute({ email, password, userId });
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
            const session = await repo.findOne({
                where: { email }, relations: [
                    'user',
                    'user.profile',
                    'user.profile.academicFormation',
                    'user.profile.accomplishment',
                    'user.profile.occupation',
                    'user.profile.language',
                    'user.profile.focusArea',
                ]
            })
            if (!session) {
                return response.status(409).send('Email not found')
            }

            const isPasswordValid = await bcrypt.compare(password, session.password)
            const token = jwt.sign({ id: session.id }, process.env.ENCRYPT_HASH, { expiresIn: '16h' })

            if (!isPasswordValid) {
                return response.status(409).send('Invalid password')
            }
            const image = path.resolve(__dirname, '..', '..', '..', '..', `uploads/${session.user.profile.image}`)
            session.user.profile.image = image;
            console.log({
                id: session.id,
                email: session.email,
                token: token,
                user: session.user,
                profile: session.user.profile
            });
            return response.status(200).send({
                id: session.id,
                email: session.email,
                token: token,
                user: session.user,
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

    public async fetchByEmail(request: Request, response: Response): Promise<Response> {
        try {
            const { email } = request.body;
            console.log(email);

            const repo = getRepository(Session);
            const res = await repo.findOne({ where: { email: email } });
            return response.json(classToClass(res));
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
            const res = await repo.execute(id);
            return response.json(res)
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default SessionController;