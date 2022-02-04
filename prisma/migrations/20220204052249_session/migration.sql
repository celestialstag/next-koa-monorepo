-- CreateTable
CREATE TABLE `Session` (
    `sessionId` VARCHAR(64) NOT NULL,
    `userId` VARCHAR(16) NOT NULL,
    `revokedAt` DATETIME(3) NULL,
    `expires` DATETIME(3) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Session_sessionId_key`(`sessionId`),
    PRIMARY KEY (`sessionId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
