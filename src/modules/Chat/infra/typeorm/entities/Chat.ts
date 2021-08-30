import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('chat')
export class Chat {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => User, (follow) => follow.id)
    follow: User

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
