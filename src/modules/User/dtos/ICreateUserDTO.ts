export default interface ICreateUserDTO {
    name: string;
    birthDate: string;
    document: string;
    city: string;
    district: string;
    street: string;
    phNumber?: string;
}