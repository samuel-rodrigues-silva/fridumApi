import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableServiceAddColumnUnread1643474036257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE service ADD COLUMN unread bool')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE service DROP COLUMN unread bool')
    }

}
