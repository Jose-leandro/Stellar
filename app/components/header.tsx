'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation' 
import Link from 'next/link'

interface HeaderProps {
  estadoUsuario: boolean
}

export default function Header ({ estadoUsuario }: HeaderProps): React.JSX.Element {
  const router = useRouter()

  const [estaCadastroUsuarioAberto, setEstaCadastroUsuarioAberto] = useState<boolean>(estadoUsuario)
  const [temAlgoABuscar, setTemAlgoABuscar] = useState<boolean>('')

  const toggleCadastroUsuario = (): void => {
    setEstaCadastroUsuarioAberto(!estaCadastroUsuarioAberto)
  }

  const buscaProdutos = (event): void => {
    let valorInputBuscar = event.valule

    setTemAlgoABuscar(valorInputBuscar)
  }

  return (
    <div className='flex justify-evenly mt-2'>
      <div className='flex w-auto h-auto items-end justify-center'>
        <Image src="/img/icons8-forma-starburst-48.png" width={35} height={35} alt="logo do site" />
        <h1 className='ml-2 text-lg'>Estrelar</h1>
      </div>
      <div>
        <input onChange={buscaProdutos} placeholder='Encontre produtos' className='border-slate-600 border rounded-md bg-transparent py-2 px-3 w-auto placeholder:ml-4' />
      </div>
      <div>
        <ul className='flex justify-evenly'>
          <li className='px-7 text-base cursor-pointer'> <Link href='/home'>Home</Link> </li>
          <li className='px-7 text-base' onClick={async () => await router.push('/settings')}>Configurações</li>
          <li className='px-7 text-base' onClick={async () => await router.push('/sobre')}>Sobre</li>
          <li className='px-7 text-base' onClick={async () => await router.push('/contato')}>Contato</li>
        </ul>
      </div>

      {estaCadastroUsuarioAberto
        ? (
        <Link href='/signup'>
          <button className='rounded bg-slate-800 px-4 py-1' onClick={toggleCadastroUsuario}>
            Criar conta
          </button>
        </Link>
          )
        : (
        <Link href="/login">
          <button className='rounded bg-slate-800 px-4 py-1' onClick={toggleCadastroUsuario}>
            Login
          </button>
        </Link>
          )}
    </div>
  )
}
