import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

export default function Login() {
  return (
    <>
      <Header />
      <div>
        <h1>Bem vido de volta, Faça o seu login</h1>
        <div>
          <label>Nome</label>
          <input placeholder='Digite o seu nome'></input>
        </div>
        <div>
          <label>Senha</label>
          <input placeholder='Digite sua senha'></input>
        </div>
      </div>
      <h2>Não faze parte do estrelar então crie uma conta</h2>
      <Footer />
    </>
  );
}
