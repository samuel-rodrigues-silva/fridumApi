import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Profile } from "../../../../Profile/infra/typeorm/entities/Profile";

@Entity('role')
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Profile)
    @JoinColumn({ name: 'id' })
    profile: Profile

    @Column('varchar')
    title: string;

    @Column('text')
    description: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;
}
