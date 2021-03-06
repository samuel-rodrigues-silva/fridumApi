import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfile1622843748928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'profile',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'role',
                    type: 'varchar'
                },
                {
                    name: 'work_resume',
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar',
                },
                {
                    name: 'video',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text'
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
        await queryRunner.dropTable('profile')
    }

}
