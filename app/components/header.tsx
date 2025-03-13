'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import DropdownMenuDemo from './ui/dropdownmenu'
import { connect } from 'react-redux'
import { setQualEstadoUsuario, setQualNomeUsuario } from '../lib/redux/actions'
import { permaneciaLogin } from '../../src/tempoLogin'
import { FaBars } from 'react-icons/fa';
// import NavigationMenuDemo from './ui/navigation-menu-demo'


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

function Header({
  qualNomeUsuario,
  setQualNomeUsuario,
  qualEstadoUsuario,
  setQualEstadoUsuario
}: HeaderProps): React.JSX.Element {
  console.log(qualNomeUsuario)
  console.log(qualEstadoUsuario)

  const [temAlgoABuscar, setTemAlgoABuscar] = useState<string>('')

  const menuImg = useRef(null);
  const [visibilityMenuImg, setVisibilityMenuImg] = useState<boolean>(false)

  useEffect(() => {
    const fetchPermaneciaLogin = async (): Promise<void> => {
      const informacoesCradratrais = await permaneciaLogin()

      if (informacoesCradratrais.estadoUsuario === 'true') {
        setQualEstadoUsuario(true)
        // console.log(qualEstadoUsuario)
      }

      setQualNomeUsuario(`${informacoesCradratrais.Nome}`)
      // console.log(qualNomeUsuario)
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
      // console.log('The string does not contain a space.')
    }
  } else {
    console.error('qualNomeUsuario is null, undefined, or not a string')
  }

  const toggleVisibility = (): void => {
    setVisibilityMenuImg((prev) => !prev);
  };

  useEffect(() => {
    const width = window.innerWidth;
    console.log(width)

  })


  return (
    <div className="flex justify-center mt-2 mb-3 py-4 md:justify-evenly md:m-0 md:items-center">
      <div className="flex w-auto h-auto mr-20 items-end justify-center md:ml-0">
        <Image
          src="/img/icons8-forma-starburst-48.png"
          width={35}
          height={35}
          alt="logo do site"
        />
        <h1 className="ml-2 text-lg">Estrelar</h1>
      </div>

      <div>
8
        {/* <NavigationMenuDemo /> */}
      </div>

      <button className="w-auto fixed top-10 right-6 bg-outer-space-gray p-2 rounded-md flex lg:hidden" ref={menuImg}>
        <FaBars className="lg:hidden" onClick={toggleVisibility} />
      </button>

      <div className={`
        ${visibilityMenuImg ?
          "hidden" :
          `w-6/12 flex fixed top-20 right-2 h-screen flex-col bg-dark-unmetal
          md:static md:h-auto md:flex-row md:bg-transparent`
        }
        `} >

        <div className={`
        ${visibilityMenuImg ? "" : "h-1/2 mt-3 mb-3"} `}>

          <ul className={`
        ${visibilityMenuImg ? "flex justify-evenly" : "h-full flex flex-col justify-evenly md:h-auto md:flex-row"} `}>

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
            <div className={`
          ${visibilityMenuImg ? "flex flex-row" : "w-full flex-col flex justify-evenly mt-10 mb-4 md:flex-row md:m-0 md:items-center"} `}>
              <Link href="/login" className={`
          ${visibilityMenuImg ? "w-auto" : "mx-6 w-10/12 md:w-auto md:m-0"} `}>
                <button className="rounded w-full border-2 border-slate-700 px-4 py-1">
                  Login
                </button>
              </Link>

              <Link href="/signup" className={`
          ${visibilityMenuImg ? "w-auto" : "mx-6 w-10/12 mt-4 md:w-auto md:m-0"} `}>
                <button className="rounded w-full bg-slate-800 px-4 py-2">
                  Criar conta
                </button>
              </Link>
            </div>
          )}

      </div>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
