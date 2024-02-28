import * as CryptoJS from 'crypto-js'
import { NextResponse } from 'next/server'
import { createPool } from '@vercel/postgres'
require('dotenv').config()

export async function criptografiaSenha (dadosUsurios): Promise<void> {
  const chaveCriptografica: string | undefined = process.env.CHAVE_CRIPTOGRAFICA
  console.log(dadosUsurios)

  const entries = Object.entries(dadosUsurios)

  for (const [key, value] of entries) {
    console.log(`Property Name: ${key}, Value: ${value}`)

    console.log(key)
    const senhaCriptografada = CryptoJS.AES.encrypt(value, chaveCriptografica).toString()
    console.log('Senha criptografada:', senhaCriptografada)

    if (key !== 'qualSenha') {
      localStorage.setItem(`dadosInformacoes${key}`, senhaCriptografada)

      const data = localStorage.getItem('dadosInformacoes')
      console.log(data)
    } else {
      console.log('Agora é a senha')

      const pool = createPool({
        connectionString: process.env.POSTGRES_PRISMA_URL,
      })

      const userId = 123
      try {
        
        const query = pool.sql`INSERT INTO usuarios (Senha) VALUES (${senhaCriptografada});`

        console.log('Executing query:', query.text, query.values)

        await query

        console.log('Data inserted successfully')
      } catch (error) {
        console.error('Error inserting data:', error)
        const response = NextResponse.json({ error }, { status: 500 })
        console.log(response)
      }

       const informacoesUsuarios = await pool.sql`SELECT * FROM information_schema.tables WHERE table_name = 'usuarios'`
       console.log(informacoesUsuarios)
    }
  }
}
