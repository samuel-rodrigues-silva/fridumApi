import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string,
    iat: number,
    exp: number
}

export default function verifyAuth(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization

    if (!authorization) {
        return res.status(401).json(req.headers)
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.ENCRYPT_HASH)
        console.log(data)
        const { id } = data as TokenPayload
        req.userId = id
        return next()
    } catch {
        return res.status(401);
    }


}