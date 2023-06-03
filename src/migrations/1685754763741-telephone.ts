import { MigrationInterface, QueryRunner } from "typeorm";

export class Telephone1685754763741 implements MigrationInterface {
    name = 'Telephone1685754763741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
    }

}
