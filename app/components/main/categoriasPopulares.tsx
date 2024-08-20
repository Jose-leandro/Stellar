import React from 'react'
import Image from 'next/image'

export function CategoriasPopulares () {
  return (
    <div className="my-5 mb-12">
      <h1 className="text-base ml-2 mb-5">Categorias Mais buscadas</h1>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <Image
            src="/img/binoculos-categoria.jpg"
            width={120}
            height={120}
            className="rounded-[100%] w-[120px] h-[110px]"
            alt="Binóculos, uma categoria frequentemente buscada"
          />
          <h2>Binoculos</h2>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/img/refrator-categoria.jpg"
            width={120}
            height={120}
            className="rounded-[100%] w-[120px] h-[110px]"
            alt="Refrator, uma categoria popular entre as buscas"
          />
          <h2>Refratores</h2>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/img/camera.jpg"
            width={120}
            height={120}
            className="rounded-[100%] w-[120px] h-[110px]"
            alt="Câmera posicionada em uma superfície, uma categoria altamente buscada"
          />
          <h2>Câmeras</h2>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/img/imagem-astronomica.jpg"
            width={120}
            height={120}
            className="rounded-[100%] w-[120px] h-[110px]"
            alt="Imagem astronômica com estrelas, nebulosas, poeira estelar e mais, uma categoria muito procurada"
          />
          <h2>Imagens astronômicas</h2>
        </div>
      </div>
    </div>
  )
}
