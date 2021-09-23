import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Service } from "../../../../Service/infra/typeorm/entities/Service";
import { User } from './../../../../User/infra/typeorm/entities/User';

@Entity('evaluation')
export class Evaluation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Service, (service) => service.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    service: Service;

    @ManyToOne(() => User, (user) => user.evaluation)
    user: User;

    @ManyToOne(() => User, (user) => user.evaluation)
    follow: User;

    @Column('text')
    description: string;

    @Column('int')
    rating: number;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
