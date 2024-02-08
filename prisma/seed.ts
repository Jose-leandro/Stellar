import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.refratores.deleteMany();

    const refratoresData = [
      {
        nome_refrator: 'Refrator branco',
        preco: 'R$ 800',
        img_url: '/img/refrator-terceiro.png'.trim(),
      },
      {
        nome_refrator: 'Refrator preto',
        preco: 'R$ 500',
        img_url: '/img/refrator-preto.png'.trim(),
      },
      {
        nome_refrator: 'Refrator dourado',
        preco: 'R$ 700',
        img_url: '/img/refrator-dourado.png'.trim(),
      },
      {
        nome_refrator: 'Refrator marrom',
        preco: 'R$ 550',
        img_url: '/img/refrator-terceiro.png'.trim(),
      },
    ];

    for (const refrator of refratoresData) {
      await prisma.refratores.create({
        data: refrator,
      });
    }

    console.log('Script executado com sucesso!');
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
