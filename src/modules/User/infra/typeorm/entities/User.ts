import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

}
