import React from 'react'
import { CategoriasPopulares } from './categories'
import { BannerInicial } from './bannerInicial'
import { CriarProdutos } from './CriarProdutos'
import Panel from '../panel'

export function Main(): React.JSX.Element {
  const amountOfItems = "200"
  const titleCategori = "arroz"
  const titleProduct = "feliz"
  const valueProduct = 200

  return (
    <>

    <Panel itIsPageHome={true} information="Create. Sell. Thrive. Welcome to Stellar." />

    

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
