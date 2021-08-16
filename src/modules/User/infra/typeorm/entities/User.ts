import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { FocusArea } from "../../../../FocusArea/infra/typeorm/entities/FocusArea";
import { Occupation } from './../../../../Occupation/infra/typeorm/entities/Occupation';
import { Accomplishment } from './../../../../Accomplishments/infra/typeorm/entities/Accomplishment';
import { Profile } from "../../../../Profile/infra/typeorm/entities/Profile";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @CreateDateColumn({ type: 'timestamp' })
    birthDate: Timestamp;

    @Column({ type: 'varchar', unique: true })
    document: string;

    @Column('varchar')
    city: string;

    @Column('varchar')
    district: string;

    @Column('varchar')
    street: string;

    @Column('varchar')
    phNumber: String;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @OneToMany(() => FocusArea, (focusArea) => focusArea.user, { cascade: true })
    focusArea?: FocusArea[]

    @OneToMany(() => Occupation, (occupation) => occupation.user, { cascade: true })
    occupation?: Occupation[]

    @OneToMany(() => Accomplishment, (accomplishment) => accomplishment.user, { cascade: true })
    accomplishment?: Accomplishment[]

    @OneToOne(() => Profile, (profile) => profile.user_id, { cascade: true })
    @JoinColumn()
    profile: Profile;

}
