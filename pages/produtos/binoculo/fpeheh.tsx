import React from "react";
import Header from "../../../app/components/header";
import Footer from "../../../app/components/footer";

const propsCradBinoculosFpeheh = {
  produtoAVenda: {
    nome: "Fpeheh",
    preco: "R$ 800",
    imgProdutoAVenda: "/img/binoculo-produto-3.jpg",
  },
  produtoSimilar1: {
    nome: "BcPel",
    preco: "R$ 460",
    imgProdutoAVenda: "/img/binoculos-produto-1.jpg",
    rotaProduto: "/produtos/binoculo/bcpel",
  },
  produtoSimilar2: {
    nome: "BlueGlass",
    preco: "R$ 550",
    imgProdutoAVenda: "/img/binoculos-produto-1.jpg",
    rotaProduto: "/produtos/binoculo/backbate",
  },
  produtoSimilar3: {
    nome: "Diamondba",
    preco: "R$ 300",
    imgProdutoAVenda: "/img/binoculo-produto-4.jpg",
    rotaProduto: "/produtos/binoculo/diamondba",
  },
};

export default function fpeheh(): React.JSX.Element {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <CardBinoculo {...propsCradBinoculosFpeheh} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
