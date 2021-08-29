export default interface ICreateServiceDTO {
    userId: string;
    postId?: string;
    followId: string;
    status: 'done' | 'doing' | 'pending' | 'refused';
    finished_at?: Date;
}