/*
  Warnings:

  - You are about to drop the column `udpated_at` on the `barbearia` table. All the data in the column will be lost.
  - Added the required column `age` to the `barbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barbeariaId` to the `barbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `barbers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `barbers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_barbearia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "operating_hours" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_barbearia" ("address", "created_at", "id", "name", "operating_hours", "telephone") SELECT "address", "created_at", "id", "name", "operating_hours", "telephone" FROM "barbearia";
DROP TABLE "barbearia";
ALTER TABLE "new_barbearia" RENAME TO "barbearia";
CREATE TABLE "new_barbers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "barbeariaId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    CONSTRAINT "barbers_barbeariaId_fkey" FOREIGN KEY ("barbeariaId") REFERENCES "barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_barbers" ("id", "name") SELECT "id", "name" FROM "barbers";
DROP TABLE "barbers";
ALTER TABLE "new_barbers" RENAME TO "barbers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
