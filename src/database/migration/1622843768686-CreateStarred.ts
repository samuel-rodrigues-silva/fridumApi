import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStarred1622843768686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'starred',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]

        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('starred')
    }

}
