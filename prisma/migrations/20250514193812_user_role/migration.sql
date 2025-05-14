-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_barbers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "barbeariaId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'BARBER',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    CONSTRAINT "barbers_barbeariaId_fkey" FOREIGN KEY ("barbeariaId") REFERENCES "barbearia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_barbers" ("age", "barbeariaId", "created_at", "id", "name", "password", "updated_at", "user") SELECT "age", "barbeariaId", "created_at", "id", "name", "password", "updated_at", "user" FROM "barbers";
DROP TABLE "barbers";
ALTER TABLE "new_barbers" RENAME TO "barbers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
