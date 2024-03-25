-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "usuarioEstaCadastrado" BOOLEAN NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "criptografia" (
    "id" SERIAL NOT NULL,
    "chaveCriptografica" TEXT NOT NULL DEFAULT 'k1h8w3q7i5l2c6h8e1z3r7p0t3m0s1t9x2i0a1c5j8e3b5x1m0y2p0',

    CONSTRAINT "criptografia_pkey" PRIMARY KEY ("id")
);
