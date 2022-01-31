import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";
import { Profile } from './../../../../Profile/infra/typeorm/entities/Profile';

@Entity('infrastructure')
export class Infrastructure {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    employees: number;

    @Column('varchar')
    technologies: [];

    @Column('varchar')
    tools: [];

    @Column('varchar')
    workstation: boolean;

    @Column('varchar')
    purchaseMaterials: boolean;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

    @ManyToOne(() => Profile, (profile) => profile.occupation, { cascade: true, onDelete: 'CASCADE' })
    profile: Profile

}
