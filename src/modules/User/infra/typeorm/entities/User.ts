import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { Profile } from "../../../../Profile/infra/typeorm/entities/Profile";
import { Post } from './../../../../Post/infra/typeorm/entities/Post';
import { Service } from './../../../../Service/infra/typeorm/entities/Service';
import { Meeting } from './../../../../Meeting/infra/typeorm/entities/Meeting';

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
    state: string;

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

    @OneToOne(() => Profile, (profile) => profile.id, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Post, (Post) => Post.user)
    post?: Post[]

    @OneToMany(() => Service, (service) => service.user)
    service: Service[];

    @OneToMany(() => Meeting, (metting) => metting.user)
    meeting: Meeting[]


}
