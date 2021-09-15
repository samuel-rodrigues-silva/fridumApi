export default interface ICreateServiceDTO {
    userId?: string;
    postId?: string;
    followId?: string;
    status: 'done' | 'doing' | 'pending' | 'refused';
    finishedAt?: Date;
    price?: string;
}