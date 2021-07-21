import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Session } from '../../typeorm/entities/Session';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

class SessionController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body
            const repo = getRepository(Session);

            const userExists = await repo.findOne({ where: { email } })

            if (userExists) {
                return response.status(409)
            } else {
                const user = repo.create({ email, password })
                await repo.save(user);
                return response.status(201).send(user)
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

            const user = await repo.findOne({ where: { email } })
            console.log(user)
            if (!user) {
                return response.status(409).send('Email not found')
            }

            const isPasswordValid = await bcrypt.compare(password, user.password)
            const token = jwt.sign({ id: user.id }, process.env.ENCRYPT_HASH, { expiresIn: '16h' })

            if (!isPasswordValid) {
                return response.status(409).send('Invalid password')
            }

            return response.status(201).send({
                id: user.id,
                email: user.email,
                token: token
            })

        } catch (error) {
            return response.send('ERROR:' + error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            console.log(request.params)
            const repo = getRepository(Session);
            const res = await repo.find(request.params);
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {

        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async remove(request: Request, response: Response): Promise<Response> {
        try {
            response.status(201).send({ userId: request.userId })
            // const repo = getRepository(Session);
            // const res = await repo.delete(request.params.id)
            // return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default SessionController;