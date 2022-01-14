import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class User1641884699680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "User",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "nickname",
            type: "varchar",
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: "Service",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "message",
            type: "text",
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "Comment",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "userId",
            type: "int",
          },
          {
            name: "serviceId",
            type: "int",
          },
          {
            name: "message",
            type: "text",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "Comment",
      new TableForeignKey({
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "User",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "Comment",
      new TableForeignKey({
        columnNames: ["serviceId"],
        referencedColumnNames: ["id"],
        referencedTableName: "Service",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
