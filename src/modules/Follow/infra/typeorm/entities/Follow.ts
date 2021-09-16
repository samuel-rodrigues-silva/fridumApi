import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";
import { Service } from './../../../../Service/infra/typeorm/entities/Service';

@Entity('follow')
export class Follow {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: ['accepted', 'pending', 'refused'] })
    status: 'accepted' | 'pending' | 'refused'

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @OneToMany(() => Service, (service) => service.user)
    service: Service;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => User, (follow) => follow.id)
    follow: User;

}
