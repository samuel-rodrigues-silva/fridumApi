export default interface ICreatePostDTO {
    user_id: string;
    description: string;
    title: string;
    image?: string;
    price: number;
    expected_date_of_delivery: Date;
}