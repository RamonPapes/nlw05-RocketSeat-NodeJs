import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1716649736124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable("compliments");
        if (!tableExists) {
            await queryRunner.createTable(new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary: true,
                    },
                    {
                        name: "user_sender_id",
                        type: "varchar",
                        length: "36",
                        isNullable: true
                    },
                    {
                        name: "user_receiver_id",
                        type: "varchar",
                        length: "36",
                        isNullable: true
                    },
                    {
                        name: "tag_id",
                        type: "varchar",
                        length: "36",
                        isNullable: true
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender_id"],
                        onDelete: "",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver_id"],
                        onDelete: "",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            }))
        }

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
