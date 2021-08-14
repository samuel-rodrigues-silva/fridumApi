import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Follow } from "../../../../Follow/infra/typeorm/entities/Follow";
import { Post } from "../../../../Post/infra/typeorm/entities/Post";
import { Profile } from "../../../../Profile/infra/typeorm/entities/Profile";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('service')
export class Service {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.id)
    @JoinColumn()
    user_id: User;

    @OneToOne(() => Post, (post) => post.id)
    @JoinColumn()
    post_id: Post;

    @OneToOne(() => Follow, (follow) => follow.id)
    @JoinColumn()
    follow_id: Follow;

    @Column({ type: 'enum', enum: ['done', 'doing', 'pending', 'refused'] })
    status: 'done' | 'doing' | 'pending' | 'refused';

    @Column({ type: 'timestamp' })
    finishedAt: Timestamp;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
