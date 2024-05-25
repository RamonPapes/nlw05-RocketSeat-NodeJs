import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1716332081332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable("users");
        if (!tableExists) {
            await queryRunner.createTable(
                new Table({
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary: true,
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "email",
                            type: "varchar",
                        },
                        {
                            name: "admin",
                            type: "boolean",
                            default: false
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()",
                        }
                    ]
                })
            )
        }

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("users");
    }

}