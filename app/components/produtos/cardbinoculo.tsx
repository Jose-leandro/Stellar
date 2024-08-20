import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface propsBinoculo {
  produtoAVenda: {
    nome: string
    preco: string
    imgProdutoAVenda: string
  }

  produtoSimilar1: {
    nome: string
    preco: string
    imgProdutoAVenda: string
    rotaProduto: string
  }

  produtoSimilar2: {
    nome: string
    preco: string
    imgProdutoAVenda: string
    rotaProduto: string
  }

  produtoSimilar3: {
    nome: string
    preco: string
    imgProdutoAVenda: string
    rotaProduto: string
  }
}

export default function cardBinoculo ({
  produtoAVenda,
  produtoSimilar1,
  produtoSimilar2,
  produtoSimilar3
}: propsBinoculo): React.JSX.Element {
  console.log(
    'produtoAVenda:',
    produtoAVenda,
    'produtoSimilar1:',
    produtoSimilar1,
    'produtoSimilar2:',
    produtoSimilar2,
    'produtoSimilar3:',
    produtoSimilar3
  )
  return (
    <>
      <div className="flex justify-evenly items-center my-3">
        <div className="w-2/5 flex flex-col justify-evenly items-center">
          <h1 className="text-2xl">Binoculo {produtoAVenda.nome}</h1>
          <h1 className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            voluptatem eius laboriosam, sed culpa provident corrupti ipsam,
            veritatis nulla iusto autem unde quos. Provident dolorem officiis
            optio labore. Iste, doloribus.
          </h1>
          <button className="w-4/5 mt-4 py-2 bg-blue-800 hover:bg-blue-900 focus:bg-blue-700 focus:w-[81%]">
            Compara por {produtoAVenda.preco}
          </button>
        </div>

        <div className="w-2/5">
          <Image
            width={450}
            height={3000}
            src={`${produtoAVenda.imgProdutoAVenda}`}
            alt={`Imagem do produto a venda chamado de binoculo ${produtoSimilar2.nome}`}
          />
        </div>
      </div>

      <div className="flex flex-col my-4">
        <h1 className="text-2xl mb-4 ml-2">Produtos similares</h1>
        <div className="flex justify-evenly">
          <div className="w-auto flex justify-evenly flex-col items-center text-center">
            <img
              className="w-50 h-44"
              src="/img/binoculo-produto-2.jpg"
              alt={`Imagem do produto semelhante aoa anterio clicado, chamado de binoculo ${produtoSimilar1.nome}`}
            />
            <div className="flex justify-between mt-2 w-full">
              <h2>Binoculo {produtoSimilar1.nome}</h2>
              <h3>{produtoSimilar1.preco}</h3>
            </div>
            <Link className="w-full" href={produtoSimilar1.rotaProduto}>
              <button className="w-4/5 mt-4 py-2 bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 focus:w-[81%]">
                Compara por {produtoSimilar1.preco}
              </button>
            </Link>
          </div>

          <div className="w-auto flex justify-evenly flex-col items-center text-center">
            <img
              className="w-50 h-44"
              src="/img/binoculo-produto-3.jpg"
              alt={`Imagem do produto semelhante aoa anterio clicado, chamado de binoculo ${produtoSimilar2.nome}`}
            />
            <div className="flex justify-between mt-2 w-full">
              <h2>Binoculo {produtoSimilar2.nome}</h2>
              <h3> {produtoSimilar2.preco} </h3>
            </div>

            <Link className="w-full" href={produtoSimilar2.rotaProduto}>
              <button className="w-4/5 mt-4 py-2 bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 focus:w-[81%]">
                Compara por {produtoSimilar2.preco}
              </button>
            </Link>
          </div>
          <div className="w-auto flex justify-evenly flex-col items-center text-center">
            <img
              className="w-50 h-44"
              src="/img/binoculo-produto-4.jpg"
              alt={`Imagem do produto semelhante aoa anterio clicado, chamado de binoculo ${produtoSimilar3.nome}`}
            />
            <div className="flex justify-between mt-2 w-full">
              <h2>Binoculo {produtoSimilar3.nome}</h2>
              <h3>{produtoSimilar3.preco}</h3>
            </div>
            <Link className="w-full" href={produtoSimilar3.rotaProduto}>
              <button className="w-4/5 mt-4 py-2 bg-blue-700 hover:bg-blue-800 focus:bg-blue-600 focus:w-[81%]">
                Compara por {produtoSimilar3.preco}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
