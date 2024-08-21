'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import DropdownMenuDemo from './ui/dropdownmenu'
import { connect } from 'react-redux'
import { setQualEstadoUsuario, setQualNomeUsuario } from '../lib/redux/actions'
import { permaneciaLogin } from '../../src/tempoLogin'

const mapStateToProps = (state: any) => ({
  qualEstadoUsuario: state.qualEstadoUsuario,
  setQualEstadoUsuario,
  setQualNomeUsuario,
  qualNomeUsuario: state.qualNomeUsuario
})

const mapDispatchToProps = {
  setQualEstadoUsuario,
  setQualNomeUsuario
}

interface HeaderProps {
  qualNomeUsuario: string
  setQualNomeUsuario: (value: string) => void
  qualEstadoUsuario: string
  setQualEstadoUsuario: (value: boolean) => void
}

function Header ({
  qualNomeUsuario,
  setQualNomeUsuario,
  qualEstadoUsuario,
  setQualEstadoUsuario
}: HeaderProps): React.JSX.Element {
  console.log(qualNomeUsuario)
  console.log(qualEstadoUsuario)

  const [temAlgoABuscar, setTemAlgoABuscar] = useState<string>('')
  console.log(temAlgoABuscar)

  useEffect(() => {
    const fetchPermaneciaLogin = async (): Promise<void> => {
      const informacoesCradratrais = await permaneciaLogin()

      if (informacoesCradratrais.estadoUsuario === 'true') {
        setQualEstadoUsuario(true)
        console.log(qualEstadoUsuario)
      }

      setQualNomeUsuario(`${informacoesCradratrais.Nome}`)
      console.log(qualNomeUsuario)
    }

    fetchPermaneciaLogin()
  })

  const buscaProdutos = (event: any): void => {
    const valorInputBuscar: string = event.valule

    setTemAlgoABuscar(valorInputBuscar)
  }

  let iniciasNomesUsuarios: string = ' '

  if (qualNomeUsuario !== '' && typeof qualNomeUsuario === 'string') {
    const lettersArray = qualNomeUsuario.split(' ')

    if (lettersArray.length > 1) {
      const segundaInicialNome = lettersArray[1][0]
      iniciasNomesUsuarios = lettersArray[0] + segundaInicialNome
    } else {
      iniciasNomesUsuarios = qualNomeUsuario
      console.log('The string does not contain a space.')
    }
  } else {
    console.error('qualNomeUsuario is null, undefined, or not a string')
  }

  return (
    <div className="flex justify-evenly mt-2">
      <div className="flex w-auto h-auto items-end justify-center">
        <Image
          src="/img/icons8-forma-starburst-48.png"
          width={35}
          height={35}
          alt="logo do site"
        />
        <h1 className="ml-2 text-lg">Estrelar</h1>
      </div>
      <div>
        <input
          onChange={buscaProdutos}
          placeholder="Encontre produtos"
          className="border-slate-600 border rounded-md bg-transparent py-2 px-3 w-auto placeholder:ml-4"
        />
      </div>
      <div>
        <ul className="flex justify-evenly">
          <li className="px-7 text-base cursor-pointer">
            {' '}
            <Link href="/home">Home</Link>{' '}
          </li>
          <li className="px-7 text-base">Configurações</li>
          <li className="px-7 text-base">Sobre</li>
          <li className="px-7 text-base">Contato</li>
        </ul>
      </div>

      {qualEstadoUsuario
        ? (
        <>
          <DropdownMenuDemo nomeUsuario={iniciasNomesUsuarios} />
        </>
          )
        : (
        <>
          <Link href="/login">
            <button className="rounded border-2 border-slate-700 px-4 py-1">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="rounded bg-slate-800 px-4 py-1">
              Criar conta
            </button>
          </Link>
        </>
          )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
