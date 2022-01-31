import { query } from "express";
import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreateService1622843760743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'service',
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
                    name: 'status',
                    type: 'enum',
                    enum: ['done', 'doing', 'penging', 'refused', 'contact', 'waitingDeal']
                },
                {
                    name: 'finishedAt',
                    type: 'timestamp',
                },
                {
                    name: 'price',
                    type: 'varchar',
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

        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('service')
    }

}
