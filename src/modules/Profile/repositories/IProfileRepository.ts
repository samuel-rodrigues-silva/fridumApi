import { DeleteResult, UpdateResult } from "typeorm";
import { Profile } from "../infra/typeorm/entities/Profile";
import ICreateProfileDTO from './../dtos/ICreateProfileDTO';

export default interface IProfileRepository {
    fetchBy(id: string): Promise<Profile>
    create(data: ICreateProfileDTO): Promise<Profile>
    update(data: ICreateProfileDTO, id: string): Promise<UpdateResult>
    remove(id: string): Promise<DeleteResult>
}