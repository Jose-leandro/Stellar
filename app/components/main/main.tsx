import React from 'react'
import { CategoriasPopulares } from './categoriasPopulares'
import { BannerInicial } from './bannerInicial'
import { CriarProdutos } from './CriarProdutos'

export function main (): React.JSX.Element {
  return (
    <>
      <BannerInicial />
      <CategoriasPopulares />
      <CriarProdutos tipoCategoria={'Refratores'} tipoProduto={'refratores'} />
      <CriarProdutos tipoCategoria={'Binoculos'} tipoProduto={'binoculos'} />
      <CriarProdutos tipoCategoria={'Cameras'} tipoProduto={'cameras'} />
      <CriarProdutos
        tipoCategoria={'Fotos Astrônomicas'}
        tipoProduto={'fotosAstronomicas'}
      />
    </>
  )
}
