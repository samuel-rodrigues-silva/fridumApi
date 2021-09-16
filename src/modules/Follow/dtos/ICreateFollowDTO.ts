export default interface ICreateFollowDTO {
    userId: string;
    followId?: string;
    status?: 'accepted' | 'pending' | 'refused'
}