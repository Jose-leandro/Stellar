import React from 'react'

// Hora que comecei a limpar - 13:50 até 14:50

interface InformacoesProduto {
  tipoCategoria: string
  tipoProduto: string
}

export async function CriarProdutos (props: InformacoesProduto): Promise<JSX.Element> {
  let data = []
  try {
    const response = await fetch(`http://localhost:3001/${props.tipoProduto}`)
    const fetchedData = await response.json()
    data = fetchedData
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
  }

  return (
    <div className='mt-3'>
      <h1 className='ml-10'>{props.tipoCategoria}</h1>
      <div className='flex justify-evenly mt-2'>
        {data.map((item) => (
          <div key={item.id} className='flex flex-wrap items-center justify-center w-[260px]'>
            <img src={item.img_url} className='rounded w-auto h-44' alt="logo do site" />
            <div className='flex justify-between w-[96%] mt-3'>
              <div>
                <h2>{item.nome}</h2>
                <h3>{item.preco}</h3>
              </div>
              <button className='rounded bg-slate-800 px-4 h-[40px] mt-1'>Compar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
