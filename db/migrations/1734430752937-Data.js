module.exports = class Data1734430752937 {
    name = 'Data1734430752937'

    async up(db) {
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "amount" numeric NOT NULL, "fee" numeric, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d6624eacc30144ea97915fe846" ON "transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_070c555a86b0b41a534a55a659" ON "transfer" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_f4007436c1b546ede08a4fd7ab" ON "transfer" ("amount") `)
        await db.query(`CREATE TABLE "asset" ("id" character varying NOT NULL, "name" text, "symbol" text, "decimals" integer, "is_frozen" boolean, "total_supply" numeric NOT NULL, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "asset_transfer" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_hash" text, "amount" numeric NOT NULL, "fee" numeric, "asset_id" character varying, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_d6055020b87303085fec8d88f5f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_dbef0cba171ad4e9bd38e1e6ba" ON "asset_transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_33a1e46edadccdaa07bc5fdcee" ON "asset_transfer" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_fe9345ff2c5e54e565443d5a7b" ON "asset_transfer" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_248d36d4f322202ffe49f120ba" ON "asset_transfer" ("asset_id") `)
        await db.query(`CREATE INDEX "IDX_f08f8fb89f8ea63568db9d1254" ON "asset_transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_5aeccfd6394815f6f9805978bf" ON "asset_transfer" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_e6ce2507c962f8b6507db03628" ON "asset_transfer" ("amount") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "asset_transfer" ADD CONSTRAINT "FK_248d36d4f322202ffe49f120bac" FOREIGN KEY ("asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "asset_transfer" ADD CONSTRAINT "FK_f08f8fb89f8ea63568db9d1254a" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "asset_transfer" ADD CONSTRAINT "FK_5aeccfd6394815f6f9805978bfa" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_d6624eacc30144ea97915fe846"`)
        await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`)
        await db.query(`DROP INDEX "public"."IDX_070c555a86b0b41a534a55a659"`)
        await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
        await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
        await db.query(`DROP INDEX "public"."IDX_f4007436c1b546ede08a4fd7ab"`)
        await db.query(`DROP TABLE "asset"`)
        await db.query(`DROP TABLE "asset_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_dbef0cba171ad4e9bd38e1e6ba"`)
        await db.query(`DROP INDEX "public"."IDX_33a1e46edadccdaa07bc5fdcee"`)
        await db.query(`DROP INDEX "public"."IDX_fe9345ff2c5e54e565443d5a7b"`)
        await db.query(`DROP INDEX "public"."IDX_248d36d4f322202ffe49f120ba"`)
        await db.query(`DROP INDEX "public"."IDX_f08f8fb89f8ea63568db9d1254"`)
        await db.query(`DROP INDEX "public"."IDX_5aeccfd6394815f6f9805978bf"`)
        await db.query(`DROP INDEX "public"."IDX_e6ce2507c962f8b6507db03628"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
        await db.query(`ALTER TABLE "asset_transfer" DROP CONSTRAINT "FK_248d36d4f322202ffe49f120bac"`)
        await db.query(`ALTER TABLE "asset_transfer" DROP CONSTRAINT "FK_f08f8fb89f8ea63568db9d1254a"`)
        await db.query(`ALTER TABLE "asset_transfer" DROP CONSTRAINT "FK_5aeccfd6394815f6f9805978bfa"`)
    }
}
