import React, { useEffect, useRef, useState } from 'react'
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'
import Link from 'next/link'
import JustValidate from 'just-validate'
import { criptografiaSenha } from '../src/dadosUsuarios'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import {
  setQualEstadoUsuario,
  setEstaValidadoCampos,
  setQualNomeUsuario
} from '../app/lib/redux/actions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const mapStateToProps = (state) => ({
  qualEstadoUsuario: state.qualEstadoUsuario,
  setQualEstadoUsuario,
  estaValidadoCampos: state.estaValidadoCampos,
  setEstaValidadoCampos,
  qualNomeUsuario: state.qualNomeUsuario,
  setQualNomeUsuario
})

const mapDispatchToProps = {
  setQualEstadoUsuario,
  setEstaValidadoCampos,
  setQualNomeUsuario
}

const headerProps = {
  estadoUsuario: false,
  redirecionar: '/some-path',
  singupOulogin: 'Sing Up'
}

function Singup ({
  qualEstadoUsuario,
  setQualNomeUsuario,
  estaValidadoCampos,
  setQualEstadoUsuario,
  setEstaValidadoCampos,
  qualNomeUsuario
}): React.JSX.Element {
  const [qualSenha, setQualSenha] = useState(' ')
  const [qualNome, setQualNome] = useState(' ')
  const [qualCidade, setQualCidade] = useState(' ')
  const [qualIdade, setQualIdade] = useState(' ')

  const myRefSenha = useRef(null)

  const router = useRouter()

  const handleRedirectToInitialPage = () => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }

  const notify = () => {
    console.log('Notificando')
    toast.success('Sua conta foi criada com sucesso!', {
      position: 'top-center'
    })
  }

  const refForm = useRef(null)
  const refButtonForm = useRef(null)

  useEffect(() => {
    if (process.browser) {
      const validator = new JustValidate('#formSingup')

      validator.addField('#form__name', [
        {
          rule: 'required',
          errorMessage: 'É necessário preencher este campo com o seu nome'
        },
        { rule: 'minLength', value: 3 },
        {
          rule: 'customRegexp',
          value: /^[A-Za-z\sÀ-ÿ]+$/,
          errorMessage:
            'Utilize apenas letras e evite o uso de certos caracteres especiais'
        }
      ])

      validator.addField('#form__cidade', [
        { rule: 'required', errorMessage: 'Por favor informe sua cidade' },
        { rule: 'minLength', value: 3 },
        {
          rule: 'customRegexp',
          value: /^[A-Za-z\sÀ-ÿ]+$/,
          errorMessage:
            'Utilize apenas letras e evite o uso de certos caracteres especiais'
        }
      ])

      validator.addField('#form__idade', [
        { rule: 'required', errorMessage: 'Por favor informe sua idade' },
        { rule: 'minLength', value: 1 },
        {
          rule: 'customRegexp',
          value: /^[0-9]+$/,
          errorMessage:
            'Utilize apenas numeros e evite o uso de caracteres especiais e letras'
        }
      ])

      validator.addField('#form__senha', [
        { rule: 'required', errorMessage: 'Por favor crie sua senha' },
        { rule: 'minLength', value: 8 },
        { rule: 'strongPassword' }
      ])

      validator.onSuccess((event) => {
        console.log('certo')
        setEstaValidadoCampos(true)
      })

      if (refForm.current) {
        const handleSubmit = (event) => {
          event.preventDefault()
        }

        refForm.current.addEventListener('submit', handleSubmit)
      }
    }
  }, [])

  const argumentosCriptografiaSenha = {
    qualNome,
    qualCidade,
    qualIdade,
    qualSenha
  }

  // Creating a new object with the properties of argumentosCriptografiaSenha
  const transformedObject = { ...argumentosCriptografiaSenha }

  console.log('Transformed Object:', transformedObject)

  const togglePasswordVisibility = (): void => {
    // Access the underlying DOM element using current
    const inputSenha = myRefSenha.current

    // Check if the input element is available before accessing its attributes
    if (inputSenha) {
      const typeCampoSenha = inputSenha.getAttribute('type')
      const novoTypeCampoSenha =
        typeCampoSenha === 'password' ? 'text' : 'password'

      // Set the new type to the input element
      inputSenha.setAttribute('type', novoTypeCampoSenha)
    }
  }

  const handelValidacaoCampos = (): void => {
    console.log('Botão clicado')
    console.log(estaValidadoCampos)

    if (estaValidadoCampos) {
      criptografiaSenha(argumentosCriptografiaSenha)
        .then((resultadoCriptografia) => {
          console.log(resultadoCriptografia)
          setQualEstadoUsuario(true)

          const keys = Object.keys(resultadoCriptografia)

          for (const key of keys) {
            const value = resultadoCriptografia[key]
            console.log(`Property Name: ${key}, Value: ${value}`)

            if (key === 'nomeUsuario') {
              console.log(key)
              console.log(value)
              setQualNomeUsuario(value)
              console.log(qualNomeUsuario)
            }

            if (key === 'resultado' && value === true) {
              console.log(key)
              console.log(value)
              localStorage.setItem('dadosInforEstadoUsuario', String(true))
              notify()
              handleRedirectToInitialPage()
            }
          }
        })
        .catch((error) => {
          console.error('Error in criptografiaSenha:', error)
        })
    }
  }

  return (
    <>
      <Header {...headerProps} />
      <div className="flex flex-col items-center my-4">
        <div className="flex flex-col items-center mt-2 mb-2">
          <Image
            src="/img/icons8-forma-starburst-48.png"
            width={35}
            height={35}
            alt="logo do site"
          />
          <h1 className="text-2xl mt-2 mb-2">
            Olá! Vamos criar a sua conta agora mesmo!
          </h1>
        </div>
        <form
          className="mt-4 bg-gray-900 border flex flex-col items-center border-gray-900 p-12 rounded sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          id="formSingup"
          ref={refForm}
        >
          <div className="flex flex-col w-full mb-5">
            <label htmlFor="form__name">Nome</label>
            <input
              type="text"
              id="form__name"
              onChange={(event) => {
                const informacoes: string = event.target.value
                setQualNome(informacoes)
              }}
              className="bg-transparent border-slate-700 border pl-2 mt-2 h-10 rounded"
            ></input>
          </div>
          <div className="flex flex-col w-full mb-5">
            <label>Cidade</label>
            <input
              type="text"
              id="form__cidade"
              onChange={(event) => {
                const informacoes: string = event.target.value
                setQualCidade(informacoes)
              }}
              className="bg-transparent border-slate-700 border pl-2 mt-2 h-10 rounded"
            ></input>
          </div>
          <div className="flex flex-col w-full mb-5">
            <label>Idade</label>
            <input
              type="number"
              id="form__idade"
              onChange={(event) => {
                const informacoes: string = event.target.value
                setQualIdade(informacoes)
              }}
              className="bg-transparent border-slate-700 border pl-2 mt-2 h-10 rounded"
            ></input>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="flex items-center justify-between">
              <label>Senha</label>
              <div className="flex">
                <Checkbox.Root
                  onClick={togglePasswordVisibility}
                  className="shadow-blackA4 hover:bg-violet3 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
                  id="c1"
                >
                  <Checkbox.Indicator className="text-black">
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>

                <label
                  className="pl-[8px] text-[15px] leading-none text-white"
                  htmlFor="c1"
                >
                  Mostrar senha
                </label>
              </div>
            </div>

            <input
              type="password"
              id="form__senha"
              ref={myRefSenha}
              onChange={(event) => {
                const informacoes: string = event.target.value
                setQualSenha(informacoes)
              }}
              className="bg-transparent border-slate-700 border pl-2 mt-2 h-10 rounded"
            ></input>
          </div>

          <button
            type="submit"
            onClick={handelValidacaoCampos}
            ref={refButtonForm}
            className="w-full mt-4 py-2 bg-blue-800 hover:bg-blue-900 focus:bg-blue-700 focus:w-[98%]"
          >
            Sign Up
          </button>
          <ToastContainer />

          <div className="text-center w-full">
            <p className="mt-2 mb-2">Ou continuie com </p>
            <div className="flex w-full justify-between">
              <div className="flex py-2 px-10 border rounded border-slate-700 justify-around items-center">
                <FcGoogle /> <p className="ml-2">Google</p>
              </div>
              <div className="flex py-2 px-10 border rounded border-slate-700 justify-around items-center">
                <FaFacebook /> <p className="ml-2">Facebook</p>
              </div>
            </div>
          </div>
          <Link href="/singup">
            <button className="mt-3">
              Já possui uma conta? Deseja acessá-la?
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Singup)
