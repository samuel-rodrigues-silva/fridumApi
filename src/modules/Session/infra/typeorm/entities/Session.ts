import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn, BeforeUpdate } from "typeorm";
import { Exclude } from 'class-transformer';
import bcrypt from 'bcryptjs'
import { User } from '../../../../User/infra/typeorm/entities/User';
@Entity('session')
export class Session {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.id, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column("varchar")
    @Exclude()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
