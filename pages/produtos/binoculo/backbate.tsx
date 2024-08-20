import React from 'react'
import CardBinoculo from '../../../app/components/produtos/cardbinoculo'
import Header from '../../../app/components/header'
import Footer from '../../../app/components/footer'

const propsCradBinoculos = {
  produtoAVenda: {
    nome: 'BackBate',
    preco: 'R$ 700',
    imgProdutoAVenda: '/img/binoculo-produto-5.jpg'
  },
  produtoSimilar1: {
    nome: 'BlueGlass',
    preco: 'R$ 550',
    imgProdutoAVenda: '/img/binoculos-produto-1.jpg',
    rotaProduto: '/produtos/binoculo/backbate'
  },
  produtoSimilar2: {
    nome: 'BcPel',
    preco: 'R$ 460',
    imgProdutoAVenda: '/img/binoculos-produto-1.jpg',
    rotaProduto: '/produtos/binoculo/bcpel'
  },
  produtoSimilar3: {
    nome: 'Fpeheh',
    preco: 'R$ 800',
    imgProdutoAVenda: '/img/binoculo-produto-3.jpg',
    rotaProduto: '/produtos/binoculo/fpeheh.tsx'
  }
}

export default function backbate (): React.JSX.Element {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <CardBinoculo {...propsCradBinoculos} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
