/*
  Warnings:

  - The `pictures` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "groupId" TEXT,
ADD COLUMN     "groupName" TEXT,
ADD COLUMN     "params" JSONB,
DROP COLUMN "pictures",
ADD COLUMN     "pictures" JSONB NOT NULL DEFAULT '[]';

-- CreateTable
CREATE TABLE "product_variants" (
    "id" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "name" TEXT NOT NULL,
    "params" JSONB,

    CONSTRAINT "product_variants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "product_variants_parentId_idx" ON "product_variants"("parentId");

-- CreateIndex
CREATE INDEX "products_groupId_idx" ON "products"("groupId");

-- AddForeignKey
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
