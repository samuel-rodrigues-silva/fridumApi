import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Accomplishment } from '../../../../Accomplishments/infra/typeorm/entities/Accomplishment';
import { Occupation } from '../../../../Occupation/infra/typeorm/entities/Occupation';
import { FocusArea } from '../../../../FocusArea/infra/typeorm/entities/FocusArea';
import { Role } from '../../../../Role/infra/typeorm/entities/Role';
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('profile')

export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.id)
    @JoinColumn()
    user_id: User;

    @OneToMany(() => Accomplishment, (accomplishment) => accomplishment.id)
    accomplishment?: Accomplishment[];

    @OneToMany(() => Occupation, (occupation) => occupation.id)
    occupation?: Occupation[];

    @OneToMany(() => FocusArea, (FocusArea) => FocusArea.id)
    FocusArea?: FocusArea[];

    @OneToMany(() => Role, (role) => role.id)
    role?: Role[];

    @Column('varchar')
    work_resume: string;

    @Column('varchar')
    image: string;

    @Column('text')
    description: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
