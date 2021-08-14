export default interface ICreateServiceDTO {
    user_id: string;
    post_id: string;
    follow_id: string;
    status: 'done' | 'doing' | 'pending' | 'refused';
    finished_at?: Date;
}