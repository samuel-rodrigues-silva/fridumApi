import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { FocusArea } from './../../../../FocusArea/infra/typeorm/entities/FocusArea';
import { Occupation } from './../../../../Occupation/infra/typeorm/entities/Occupation';
import { Accomplishment } from './../../../../Accomplishments/infra/typeorm/entities/Accomplishment';

@Entity('profile')

export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    role?: string;

    @Column('varchar')
    work_resume?: string;

    @Column('varchar')
    image?: string;

    @Column('text')
    description?: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @OneToMany(() => FocusArea, (focusProfile) => focusProfile.profile)
    focusArea?: FocusArea[]

    @OneToMany(() => Occupation, (occupation) => occupation.profile)
    occupation?: Occupation[]

    @OneToMany(() => Accomplishment, (accomplishment) => accomplishment.profile)
    accomplishment?: Accomplishment[]
}
