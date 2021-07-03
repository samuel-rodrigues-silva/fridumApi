import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Location } from '../../typeorm/entities/Location';

class LocationController {

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const repo = getRepository(Location);
            const res = await repo.save(request.body);
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
            //console.log("errorMessage =>", error.message);
        }
    }

    public async fetchBy(request: Request, response: Response): Promise<Response> {
        try {
            console.log(request.params)
            const repo = getRepository(Location);
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
            const repo = getRepository(Location);
            const res = await repo.delete(request.params.id)
            return response.status(201).send(res);
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export default LocationController;