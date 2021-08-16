import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('occupation')
export class Occupation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'id' })
    user: User

    @Column('varchar')
    role: string;

    @Column('varchar')
    company: string;

    @CreateDateColumn({ type: 'timestamp' })
    date_in: Date;

    @CreateDateColumn({ type: 'timestamp' })
    date_out: Date;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
