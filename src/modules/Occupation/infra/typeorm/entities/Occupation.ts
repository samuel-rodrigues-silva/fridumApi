import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('occupation')
export class Occupation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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
