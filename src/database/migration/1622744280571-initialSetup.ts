import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InitialSetup1622744280571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'user',
                    columns: [
                        {
                            name: 'id',
                            type: 'varchar',
                            isPrimary: true,

                        },
                        {
                            name: 'name',
                            type: 'varchar',
                        },
                        {
                            name: 'birthDate',
                            type: 'timestamp',
                        },
                        {
                            name: 'document',
                            type: 'varchar',
                            isUnique: true,
                        },
                        {
                            name: 'city',
                            type: 'varchar',
                        },
                        {
                            name: 'state',
                            type: 'varchar',
                        },
                        {
                            name: 'district',
                            type: 'varchar',
                        },
                        {
                            name: 'street',
                            type: 'varchar',
                        },
                        {
                            name: 'phNumber',
                            type: 'varchar',
                        },
                        {
                            name: 'createdAt',
                            type: 'timestamp',
                            default: 'now()',
                        },
                        {
                            name: 'updatedAt',
                            type: 'timestamp',
                            default: 'now()',
                        },
                    ]
                }
            ), true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
