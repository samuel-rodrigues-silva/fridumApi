import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Chat } from "../../../../Chat/infra/typeorm/entities/Chat";
import { Follow } from "../../../../Follow/infra/typeorm/entities/Follow";
import { Post } from "../../../../Post/infra/typeorm/entities/Post";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('service')
export class Service {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: ['contact', 'done', 'doing', 'pending', 'waitingDeal', 'refused'] })
    status: 'contact' | 'done' | 'doing' | 'pending' | 'refused' | 'waitingDeal';

    @Column({ type: 'timestamp' })
    finishedAt: Timestamp;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar' })
    price: string;

    @Column({ type: 'bool' })
    unread: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @ManyToOne(() => User, (user) => user.service)
    user: User;

    @ManyToOne(() => Post, (post) => post.service)
    post: Post;

    @ManyToOne(() => User, (follow) => follow.service)
    follow: User;

    @ManyToOne(() => Chat, (chat) => chat.service)
    chat: Chat;
}
