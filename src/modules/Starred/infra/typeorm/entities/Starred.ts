import { CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Post } from "../../../../Post/infra/typeorm/entities/Post";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('starred')
export class Starred {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => User, (user) => user.id)
    user_id: User;

    @ManyToMany(() => Post, (post) => post.id)
    post_id: Post;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' },)
    createdAt: Timestamp;
}
