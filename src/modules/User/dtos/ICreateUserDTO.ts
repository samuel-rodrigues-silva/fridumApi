export default interface ICreateUserDTO {
    name: string;
    birth_date: string;
    document: string;
    city: string;
    district: string;
    street: string;
    phNumber?: string;
}