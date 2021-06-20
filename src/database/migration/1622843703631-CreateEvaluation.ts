import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEvaluation1622843703631 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'evaluation',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'service_id',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'rating',
                        type: 'integer'
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
        queryRunner.dropTable('evaluation');
    }

}
