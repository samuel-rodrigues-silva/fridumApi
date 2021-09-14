import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Follow } from "../../../../Follow/infra/typeorm/entities/Follow";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('meeting')
export class Meeting {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar' })
    street: string

    @Column({ type: 'varchar' })
    district: string

    @Column({ type: 'varchar' })
    city: string

    @Column({ type: 'varchar' })
    state: string

    @ManyToOne(() => User, (user) => user.meeting)
    user: User;

    @ManyToOne(() => User, (follow) => follow.meeting)
    follow: User;

    @CreateDateColumn({ type: 'timestamp' })
    meeting_time: Timestamp

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
