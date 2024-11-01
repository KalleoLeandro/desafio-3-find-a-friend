-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "owner_id" TEXT;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
