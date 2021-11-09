import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { FocusArea } from './../../../../FocusArea/infra/typeorm/entities/FocusArea';
import { Occupation } from './../../../../Occupation/infra/typeorm/entities/Occupation';
import { Accomplishment } from './../../../../Accomplishments/infra/typeorm/entities/Accomplishment';
import { Language } from './../../../../Language/infra/typeorm/entities/Language';
import { AcademicFormation } from './../../../../AcademicFormation/infra/typeorm/entities/AcademicFormation';

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

    @Column('varchar')
    video?: string;

    @Column('text')
    description?: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @OneToMany(() => Accomplishment, (accomplishment) => accomplishment.profile)
    accomplishment?: Accomplishment[]

    @OneToMany(() => AcademicFormation, (academicFormation) => academicFormation.profile)
    academicFormation?: AcademicFormation[]

    @OneToMany(() => FocusArea, (focusProfile) => focusProfile.profile)
    focusArea?: FocusArea[]

    @OneToMany(() => Occupation, (occupation) => occupation.profile)
    occupation?: Occupation[]

    @OneToMany(() => Language, (Language) => Language.profile)
    language?: Language[]



}
