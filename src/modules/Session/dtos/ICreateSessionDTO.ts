import { User } from "../../User/infra/typeorm/entities/User";

export default interface ICreateSessionDTO {
    id?: string;
    email: string;
    password: string;
    token?: string;
    userId?: string;
}