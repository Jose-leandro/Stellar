import React from 'react'
import { CategoriasPopulares } from './categoriasPopulares'
import { BannerInicial } from './bannerInicial'
import { CriarProdutos } from './CriarProdutos'

export function Main (): React.JSX.Element {
  return (
    <>
      <BannerInicial />
      <CategoriasPopulares />
      <CriarProdutos tipoProduto={'refratores'} />
      <CriarProdutos tipoProduto={'binoculos'} />
      <CriarProdutos tipoProduto={'cameras'} />
      <CriarProdutos tipoProduto={'fotosAstronomicas'} />
    </>
  )
}
