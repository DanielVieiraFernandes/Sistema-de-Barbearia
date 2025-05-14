/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `barbers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "barbers_user_key" ON "barbers"("user");
