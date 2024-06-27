/*
  Warnings:

  - You are about to alter the column `nome` on the `mobile` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "awards" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "backend" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "cloud" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "databases" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "devops" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "education" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "experience" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "files" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "frontend" ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "mobile" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "dt_cadastro" DROP DEFAULT;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "dt_cadastro" DROP DEFAULT;
