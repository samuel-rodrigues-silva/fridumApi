import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Role } from '../../../../Role/infra/typeorm/entities/Role';
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('profile')

export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.id, { cascade: true })
    @JoinColumn()
    user_id: User;

    @OneToMany(() => Role, (role) => role.id, { cascade: true })
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
