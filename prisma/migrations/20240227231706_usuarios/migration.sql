-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);
