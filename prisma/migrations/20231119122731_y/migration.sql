-- CreateTable
CREATE TABLE "User" (
    "dni" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "age" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("dni")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
