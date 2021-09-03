import { Column, CreateDateColumn, Double, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from '../../../../User/infra/typeorm/entities/User';
import { Service } from './../../../../Service/infra/typeorm/entities/Service';

@Entity('post')
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    description: string;

    @Column('varchar')
    title: string;

    @Column('varchar')
    city: string;

    @Column('varchar')
    state: string;

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

    @ManyToOne(() => User)
    user: User

    @OneToMany(() => Service, (service) => service.user)
    service: Service;

}
