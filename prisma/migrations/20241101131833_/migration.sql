/*
  Warnings:

  - Added the required column `address_id` to the `owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "owner" ADD COLUMN     "address_id" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "owner" ADD CONSTRAINT "owner_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
