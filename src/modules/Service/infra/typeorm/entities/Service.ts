import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Follow } from "../../../../Follow/infra/typeorm/entities/Follow";
import { Post } from "../../../../Post/infra/typeorm/entities/Post";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('service')
export class Service {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.service)
    user: User;

    @ManyToOne(() => Post, (post) => post.service)
    post: Post;

    @ManyToOne(() => Follow, (follow) => follow.service)
    follow: Follow;

    @Column({ type: 'enum', enum: ['done', 'doing', 'pending', 'refused'] })
    status: 'done' | 'doing' | 'pending' | 'refused';

    @Column({ type: 'timestamp' })
    finishedAt: Timestamp;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
