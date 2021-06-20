import { CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Profile } from "../../../../Profile/infra/typeorm/entities/Profile";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('follow')
export class Follow {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => User, (user) => user.id)
    user_id: User;

    @ManyToMany(() => Follow, (follow) => follow.id)
    follow_id: Follow;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
