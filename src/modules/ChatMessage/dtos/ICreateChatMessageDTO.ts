export default interface ICreateChatMessageDTO {
    chatId: string;
    userId: string;
    message: string;
    unread: boolean;
}