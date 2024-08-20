import * as CryptoJS from 'crypto-js'
import { createPool } from '@vercel/postgres'
import { NextResponse } from 'next/server'

require('dotenv').config()

let nomeUsuario = ''

async function buscarInformacoesBancoDados () {
  let result = ''
  const pool = createPool({
    // connectionString: process.env.POSTGRES_PRISMA_URL,
    connectionString:
      'postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15'
  })

  const query = pool.sql`SELECT "chaveCriptografica" FROM criptografia WHERE "chaveCriptografica" IS NOT NULL`
  result = await pool.query(query) // Use pool.query to execute the query
  console.log(result)
  console.log('Query result:', result.rows)
  try {
  } catch (error) {
    console.error('Error inserting data:', error)
    const response = NextResponse.json({ error }, { status: 500 })
    console.log(response)
  }

  return result
}

export async function criptacaoDados (key, value, chaveCriptografica) {
  const dadosCriptogrados = {}

  const qualDadoCriptografado = CryptoJS.AES.encrypt(
    value,
    chaveCriptografica
  ).toString()
  console.log(key + ' criptografada:', qualDadoCriptografado)

  if (!(key in dadosCriptogrados)) {
    dadosCriptogrados[key] = qualDadoCriptografado
    console.log(
      `Dado "${key}" adicionado com valor "${qualDadoCriptografado}".`
    )
  } else {
    console.log(`A key "${key}" já existe. O valor não foi substituído.`)
  }

  return dadosCriptogrados
}

export async function armazenamentoDados (qualDadoCriptografado) {
  console.log(qualDadoCriptografado)

  const keys = Object.keys(qualDadoCriptografado)

  let sucessoNoArmazenamento = false

  for (const key of keys) {
    const value = qualDadoCriptografado[key]
    console.log(`Property Name: ${key}, Value: ${value}`)

    if (key !== 'qualSenha') {
      localStorage.setItem(`dadosInformacoes${key}`, value)

      const data = localStorage.getItem('dadosInformacoes')
      console.log(data)
    } else {
      console.log('Agora é a senha')

      const pool = createPool({
        // connectionString: process.env.POSTGRES_PRISMA_URL,
        connectionString:
          'postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15'
      })

      try {
        if (key === 'qualSenha' && key !== null) {
          const estadoUsuario = true
          console.log(nomeUsuario)
          const querySenha = pool.sql`INSERT INTO usuarios (Nome, senha, "usuarioEstaCadastrado") VALUES (${nomeUsuario}, ${value}, ${estadoUsuario})`
          console.log(value)
          await querySenha
          console.log(querySenha)
          console.log('Data inserted successfully Senha e Nome')
          sucessoNoArmazenamento = true
          console.log(sucessoNoArmazenamento)
        }
      } catch (error) {
        console.error('Error inserting data:', error)
        const response = NextResponse.json({ error }, { status: 500 })
        console.log(response)
      }
    }
  }

  return sucessoNoArmazenamento
}

export async function criptografiaSenha (dadosUsurios) {
  let resultado

  for (const key in dadosUsurios) {
    const value = dadosUsurios[key]
    console.log(`Property Name: ${key}, Value: ${value}`)

    if (key === 'qualNome') {
      nomeUsuario = value
    }

    try {
      // const chaveCriptografica = await buscarInformacoesBancoDados()
      const chaveCriptografica: string | undefined =
        'k1h8w3q7i5l2c6h8e1z3r7p0t3m0s1t9x2i0a1c5j8e3b5x1m0y2p0'
      console.log(chaveCriptografica)
      const dadosCriptografados = await criptacaoDados(
        key,
        value,
        chaveCriptografica
      )
      console.log(dadosCriptografados)
      const sucessoNoArmazenamentos =
        await armazenamentoDados(dadosCriptografados)
      resultado = sucessoNoArmazenamentos

      console.log(resultado)
    } catch (error) {
      console.error('Error in criptacaoDados:', error)
    }
  }

  return { nomeUsuario, resultado }
}
