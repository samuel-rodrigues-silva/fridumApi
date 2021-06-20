import { CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Follow } from "../../../../Follow/infra/typeorm/entities/Follow";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('chat')
export class Chat {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToOne(() => User, (user) => user.id)
    @JoinColumn()
    user_id: string

    @OneToOne(() => Follow, (follow) => follow.id)
    @JoinColumn()
    follow_id: Follow

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
