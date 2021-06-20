import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAccomplishments1622843655353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'accomplishment',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'image',
                        type: 'varchar'
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
        queryRunner.dropTable('accomplishment')
    }

}
