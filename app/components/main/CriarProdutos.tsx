import React, { useEffect, useState } from 'react'

interface InformacoesProduto {
  tipoCategoria: string
  tipoProduto: string
}

export function CriarProdutos (props: InformacoesProduto): JSX.Element {
  const [data, setData] = useState<any[]>([]) // Change any[] to the actual type of your data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/${props.tipoProduto}`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const fetchedData = await response.json()
        setData(fetchedData)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }

    fetchData()
  }, [props.tipoProduto]) // Refetch data when props.tipoProduto changes

  return (
    <div className="mt-3">
      <h1 className="ml-10">{props.tipoCategoria}</h1>
      <div className="flex justify-evenly mt-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-center justify-center w-[260px]"
          >
            <img
              src={item.img_url}
              className="rounded w-auto h-44"
              alt="logo do site"
            />
            <div className="flex justify-between w-[96%] mt-3">
              <div>
                <h2>{item.nome}</h2>
                <h3>{item.preco}</h3>
              </div>
              <button className="rounded bg-slate-800 px-4 h-[40px] mt-1">
                Compar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
