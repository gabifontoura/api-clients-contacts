import { MigrationInterface, QueryRunner } from "typeorm";

export class Update1685284446822 implements MigrationInterface {
    name = 'Update1685284446822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "admin"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "admin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

}
