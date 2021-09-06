import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";
import { Service } from './../../../../Service/infra/typeorm/entities/Service';

@Entity('chat')
export class Chat {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => User, (follow) => follow.id)
    follow: User

    @OneToOne(() => Service, (service) => service.id)
    @JoinColumn()
    service: Service

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
