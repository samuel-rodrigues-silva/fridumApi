export default interface ICreateProfileDTO {
    user_id: string;
    role: string;
    work_resume?: string;
    image?: string;
    description?: string;
}