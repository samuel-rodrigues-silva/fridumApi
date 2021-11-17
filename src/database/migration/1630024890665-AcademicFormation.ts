import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AcademicFormation1630024890665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'academicformation',
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
                    name: 'institution',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'varchar',
                },
                {
                    name: 'conclusion_date',
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('academicformation')
    }

}
