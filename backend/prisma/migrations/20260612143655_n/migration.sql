/*
  Warnings:

  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `filme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tarefa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tarefa` DROP FOREIGN KEY `Tarefa_categoriaId_fkey`;

-- DropTable
DROP TABLE `categoria`;

-- DropTable
DROP TABLE `filme`;

-- DropTable
DROP TABLE `tarefa`;

-- CreateTable
CREATE TABLE `movies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `genero` VARCHAR(100) NOT NULL,
    `descricao` LONGTEXT NULL,
    `diretor` VARCHAR(255) NOT NULL,
    `elenco` LONGTEXT NULL,
    `duracao` INTEGER NOT NULL,
    `anoLancamento` INTEGER NOT NULL,
    `classificacao` VARCHAR(50) NOT NULL,
    `imagem` LONGTEXT NULL,
    `nota` DOUBLE NOT NULL DEFAULT 0,
    `disponivel` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
