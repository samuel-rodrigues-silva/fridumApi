export default interface ICreateSessionDTO {
    id?: string;
    email: string;
    password: string;
    token?: string;
}