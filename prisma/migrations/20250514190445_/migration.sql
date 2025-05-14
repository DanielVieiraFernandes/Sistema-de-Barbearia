/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `specialites` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "specialites_name_key" ON "specialites"("name");
