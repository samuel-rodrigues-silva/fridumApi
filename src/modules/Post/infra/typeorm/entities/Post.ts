import { Column, CreateDateColumn, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from '../../../../User/infra/typeorm/entities/User';

@Entity('post')
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.id)
    user_id: User;

    @Column('text')
    description: string;

    @Column('varchar')
    title: string;

    @Column('varchar')
    image: string;

    @Column('double')
    price: Double

    @CreateDateColumn({ type: 'timestamp' })
    expected_date_of_delivery: Timestamp;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @CreateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;




}
