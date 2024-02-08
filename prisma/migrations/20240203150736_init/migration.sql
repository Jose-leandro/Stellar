-- CreateTable
CREATE TABLE "refratores" (
    "id" SERIAL NOT NULL,
    "nome_refrator" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refratores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "refratores_preco_key" ON "refratores"("preco");
