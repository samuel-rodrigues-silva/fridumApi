import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Chat } from "../../../../Chat/infra/typeorm/entities/Chat";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('chatmessage')
export class ChatMessage {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Chat, (chat) => chat.chatMessage)
    chat: Chat

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @Column('text')
    message: string

    @Column({ type: 'bool' })
    unread: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
