import * as CryptoJS from 'crypto-js'
import { neon } from '@neondatabase/serverless'
require('dotenv').config()

export async function descriptografarDados (valor) {
  const chaveCriptografica =
    'k1h8w3q7i5l2c6h8e1z3r7p0t3m0s1t9x2i0a1c5j8e3b5x1m0y2p0'

  const dadoDescriptografado = CryptoJS.AES.decrypt(
    valor,
    chaveCriptografica
  ).toString(CryptoJS.enc.Utf8)

  return dadoDescriptografado
}

export async function verificarDadosUsuarios (dadosUsuarios) {
  const buscasQuery = []
  let informacoesDescriptografadasNome = 'Valor'
  let informacoesDescriptografadasSenha = 'Valor'

  for (const chave in dadosUsuarios) {
    if (Object.hasOwnProperty.call(dadosUsuarios, chave)) {
      const valor = dadosUsuarios[chave]
      buscasQuery.push(chave)

      let querySenha

      const sql = neon(
        'postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15'
      )

      if (chave === 'qualSenha') {
        const query =
          await sql`SELECT senha FROM usuarios WHERE senha IS NOT NULL`

        query.forEach((objeto) => {
          querySenha = objeto.senha
        })
      }

      if (querySenha) {
        informacoesDescriptografadasSenha =
          await descriptografarDados(querySenha)
      }

      let queryNome = 'Valor'
      if (chave === 'qualNome') {
        const sql = neon(
          'postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15'
        )
        const query =
          await sql`SELECT nome FROM usuarios WHERE nome IS NOT NULL`

        query.forEach((objeto) => {
          queryNome = objeto.nome

          informacoesDescriptografadasNome = queryNome
        })
      }
    }
  }

  const nomeValido =
    informacoesDescriptografadasNome === dadosUsuarios.qualNome
  const nomeUsuarioValido = dadosUsuarios.qualNome
  const senhaValida =
    informacoesDescriptografadasSenha === dadosUsuarios.qualSenha
  console.log(informacoesDescriptografadasSenha)
  console.log(
    'nome:',
    nomeValido,
    'senha:',
    senhaValida,
    'nomeUsuario:',
    nomeUsuarioValido
  )
  return {
    nome: nomeValido,
    senha: senhaValida,
    nomeUsuario: nomeUsuarioValido
  }
}
