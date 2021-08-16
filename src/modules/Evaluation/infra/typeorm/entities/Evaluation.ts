import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Service } from "../../../../Service/infra/typeorm/entities/Service";

@Entity('evaluation')
export class Evaluation {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Service, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'id' })
    service_id: Service;

    @Column('text')
    description: string;

    @Column('int')
    rating: number;

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
