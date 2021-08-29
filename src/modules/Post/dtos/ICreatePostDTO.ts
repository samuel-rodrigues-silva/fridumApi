export default interface ICreatePostDTO {
    userId: string,
    city: string,
    state: string,
    description: string;
    title: string;
    image?: string;
    price: number;
    expected_date_of_delivery: Date;
}