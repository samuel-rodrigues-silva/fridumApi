import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMeeting1622843730887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'meeting',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'profile_id',
                        type: 'varchar',
                    },
                    {
                        name: 'location_id',
                        type: 'varchar'
                    },
                    {
                        name: 'meeting_time',
                        type: 'timestamp'
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("meeting");
    }

}
