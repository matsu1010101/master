-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "menuId" TEXT NOT NULL,
    "nameJa" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameZh" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isVegan" BOOLEAN NOT NULL DEFAULT false,
    "popularity" INTEGER NOT NULL DEFAULT 5,
    "price" INTEGER NOT NULL DEFAULT 0,
    "allergy" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Menu_menuId_key" ON "Menu"("menuId");
