import { CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Post } from "../../../../Post/infra/typeorm/entities/Post";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('starred')
export class Starred {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinTable()
    user: User;

    @ManyToOne(() => Post, (post) => post.id)
    @JoinTable()
    post: Post;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' },)
    createdAt: Timestamp;
}
