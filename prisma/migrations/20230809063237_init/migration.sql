-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Record_title_key" ON "Record"("title");
