-- CreateTable
CREATE TABLE "hundar" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "hundar_token_key" ON "hundar"("token");
