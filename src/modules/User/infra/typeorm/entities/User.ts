import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { FocusArea } from "../../../../FocusArea/infra/typeorm/entities/FocusArea";
import { Occupation } from './../../../../Occupation/infra/typeorm/entities/Occupation';
import { Accomplishment } from './../../../../Accomplishments/infra/typeorm/entities/Accomplishment';
import { Profile } from "../../../../Profile/infra/typeorm/entities/Profile";
import { Session } from './../../../../Session/infra/typeorm/entities/Session';
import { session } from "passport";

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

    @OneToOne(() => Profile, (profile) => profile.id)
    @JoinColumn()
    profile: Profile;

}
