import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePost1622843743561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'post',
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
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'double'
                },
                {
                    name: 'expected_date_of_delivery',
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
        queryRunner.dropTable('post');
    }

}
