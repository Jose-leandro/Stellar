import React from 'react'
import { CategoriasPopulares } from './categoriasPopulares'
import { BannerInicial } from './bannerInicial'
import { CriarProdutos } from './CriarProdutos'

export function Main(): React.JSX.Element {
  const amountOfItems = "200"
  const titleCategori = "arroz"
  const titleProduct = "feliz"
  const valueProduct = 200

  return (
    <>

      <section>

        <img src='public/img/nature.jpg' />
        <h1>Your Gateway to Infinite Possibilities</h1>
        <h2>From stargazing equipment to everyday treasures</h2>
        <h3>Join our global community of entrepreneurs, collectors, and sellers</h3>

        <input placeholder='Search for anything under the strs...' />
        <img src="" />

      </section>

      <section>
        <h2>Explore Categories</h2>
        <span>From telescopes to treasure, find exactly what you are looking for</span>

        {
          <div>
            <img />
            <div>
              <h2>Astronomy & Space</h2>
              <h2> {amountOfItems}+ items </h2>
            </div>
          </div>
        }

      </section>

      <section>

        <div>
          <h2>Featured Prosucts</h2>
          <span>Discover our most popular items</span>
        </div>

        <div>
          {/* "use radix ui for creater" */}
        </div>

        {
          <div>
            <img />
            <h3> {titleCategori} </h3>

            <div>
              <div>
                <h3> {titleProduct} </h3>
                <span> {valueProduct} </span>
              </div>

            </div>
          </div>
        }

      </section>


      {/* <BannerInicial />
      <CategoriasPopulares />
      <CriarProdutos tipoCategoria={'Refratores'} tipoProduto={'refratores'} />
      <CriarProdutos tipoCategoria={'Binoculos'} tipoProduto={'binoculos'} />
      <CriarProdutos tipoCategoria={'Cameras'} tipoProduto={'cameras'} />
      <CriarProdutos
        tipoCategoria={'Fotos Astrônomicas'}
        tipoProduto={'fotosAstronomicas'}
      /> */}
    </>
  )
}
