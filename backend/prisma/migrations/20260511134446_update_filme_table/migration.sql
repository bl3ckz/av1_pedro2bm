-- CreateTable
CREATE TABLE `Filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NULL,
    `diretor` VARCHAR(191) NULL,
    `anoLancamento` INTEGER NULL,
    `descricao` LONGTEXT NULL,
    `nota` DOUBLE NULL,
    `duracao` INTEGER NULL,
    `atorPrincipal` VARCHAR(191) NULL,
    `pais` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
