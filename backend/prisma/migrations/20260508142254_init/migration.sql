/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_categoryId_fkey`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `task`;

-- CreateTable
CREATE TABLE `Tarefa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `concluida` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `categoriaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Categoria_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tarefa` ADD CONSTRAINT `Tarefa_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
