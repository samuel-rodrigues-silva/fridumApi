import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';

@Entity('occupation')
export class Occupation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    role: string;

    @Column('varchar')
    company: string;

    @CreateDateColumn({ type: 'timestamp' })
    date_in: Date;

    @CreateDateColumn({ type: 'timestamp' })
    date_out: Date;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @ManyToOne(() => Profile, (profile) => profile.occupation, { cascade: true, onDelete: 'CASCADE' })
    profile: Profile

}
