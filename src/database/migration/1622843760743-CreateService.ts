import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateService1622843760743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'service',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['done', 'doing', 'penging', 'refused', 'contact', 'waitingDeal']
                },
                {
                    name: 'finishedAt',
                    type: 'timestamp',
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
        queryRunner.dropTable('service')
    }

}
