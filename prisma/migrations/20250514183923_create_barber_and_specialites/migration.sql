/*
  Warnings:

  - You are about to drop the `Barbearia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Barbearia";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "barbearia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "operating_hours" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "udpated_at" DATETIME
);

-- CreateTable
CREATE TABLE "specialites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "barbers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BarberSpecialites" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BarberSpecialites_A_fkey" FOREIGN KEY ("A") REFERENCES "barbers" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BarberSpecialites_B_fkey" FOREIGN KEY ("B") REFERENCES "specialites" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_BarberSpecialites_AB_unique" ON "_BarberSpecialites"("A", "B");

-- CreateIndex
CREATE INDEX "_BarberSpecialites_B_index" ON "_BarberSpecialites"("B");
