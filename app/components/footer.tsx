import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="justify-evenly items-center">
      <div>
        <Image src="/img/icons8-forma-starburst-48.png" width={35} height={35} alt="logo do site" />
      </div>

      <div className="flex justify-evenly">
        <div className="w-[200px]">
          <h2 className="text-xl">Sobre nós</h2>
          <ul className="ml-3">
            <li>O que é E-commerce Estrelar</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl">Contato</h2>
          <ul className="ml-3">
            <li>Por Telefone</li>
            <li>Por email</li>
            <li>Whatsapp</li>
            <li>E Mais</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl">Termos e políticas</h2>
          <ul className="ml-3">
            <li>Termos de uso</li>
            <li>Polítca de privadicade</li>
            <li>Política de cookies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl">Direitos autorais</h2>
          <ul className="ml-3">
            <li>Uso de imagens e icones</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-2">
        <h3 className="text-lg">&copy; Desenvolvido por José Leandro</h3>
      </div>
    </div>
  );
}
