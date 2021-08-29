import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Profile } from '../../../../Profile/infra/typeorm/entities/Profile';

@Entity('academicformation')
export class AcademicFormation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    title: string;

    @Column('text')
    institution: string;

    @Column('varchar')
    description: string;

    @CreateDateColumn({ type: 'timestamp'})
    conclusion_date: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @ManyToOne(() => Profile, (profile) => profile.accomplishment)
    profile: Profile
}


