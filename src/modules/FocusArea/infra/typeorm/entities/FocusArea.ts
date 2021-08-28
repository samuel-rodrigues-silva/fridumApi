import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';

@Entity('focusarea')
export class FocusArea {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    business: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @ManyToOne(() => Profile, (profile) => profile.focusArea, { cascade: true, onDelete: 'CASCADE' })
    profile: Profile

}
