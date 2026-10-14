-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "deletedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "deletedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "deletedAt" DROP DEFAULT;
