import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOccupation1622843739086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'occupation',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'user',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'role',
                    type: 'varchar'
                },
                {
                    name: 'company',
                    type: 'varchar',
                },
                {
                    name: 'date_in',
                    type: 'timestamp'
                },
                {
                    name: 'date_out',
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

        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('occupation');
    }

}
