import { CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Follow } from "../../../../Follow/infra/typeorm/entities/Follow";
import { Location } from "../../../../Location/infra/typeorm/entities/Location";
import { User } from "../../../../User/infra/typeorm/entities/User";

@Entity('meeting')
export class Meeting {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => User, (user) => user.id)
    user_id: User;

    @ManyToMany(() => Follow, (follow) => follow.id)
    follow_id: Follow;

    @ManyToMany(() => Location, (location) => location.id)
    location_id: Location;

    @CreateDateColumn({ type: 'timestamp' })
    meeting_time: Timestamp

    @CreateDateColumn({ type: 'timestamp', name: 'created_At' })
    createdAt: Timestamp;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_At' })
    updatedAt: Timestamp;

}
