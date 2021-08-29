import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Service } from "../../../../Service/infra/typeorm/entities/Service";
import { User } from './../../../../User/infra/typeorm/entities/User';

@Entity('evaluation')
export class Evaluation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Service, (service) => service.id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn()
    service: Service;

    @OneToOne(() => User, (user) => user.id)
    user: User;

    @Column('text')
    description: string;

    @Column('int')
    rating: number;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
