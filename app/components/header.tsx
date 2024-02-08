import React from 'react';
import Image from 'next/image';

export default function Header() {
  const menuConfiguracoes = () => {

  };

  return (
    <>
      <div className='flex justify-evenly mt-2'>
        <div className='flex w-auto h-auto items-end justify-center'>
          <Image src="/img/icons8-forma-starburst-48.png" width={35} height={35} alt="logo do site" />
          <h1 className='ml-2 text-lg'>Estrelar</h1>
        </div>
        <div>
          <input placeholder='Encronte produtos' className='border-slate-600 border rounded-md bg-transparent py-2 px-3 w-auto placeholder:ml-4'></input>
          {/* <Image></Image> */}
        </div>
        <div>
          <ul className='flex justify-evenly'>
            <li className='px-7 text-base'>Visão geral</li>
            <li className='px-7 text-base'>Configurações</li>
            <li className='px-7 text-base'>Sobre</li>
            <li className='px-7 text-base'>Contato</li>
          </ul>
        </div>
        <div>
          <button className='rounded bg-slate-800 px-4 py-1'>Entar</button>
        </div>
      </div>
    </>
  );
}
