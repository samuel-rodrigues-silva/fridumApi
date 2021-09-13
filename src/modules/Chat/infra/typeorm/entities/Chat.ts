import { CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";
import { Service } from './../../../../Service/infra/typeorm/entities/Service';
import { ChatMessage } from './../../../../ChatMessage/infra/typeorm/entities/ChatMessage';

@Entity('chat')
export class Chat {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => User, (follow) => follow.id)
    follow: User

    @OneToMany(() => ChatMessage, (chatMessage) => chatMessage.chat, { cascade: true, onDelete: 'CASCADE' })
    chatMessage?: ChatMessage[]

    @OneToOne(() => Service, (service) => service.id)
    @JoinColumn()
    service: Service

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
