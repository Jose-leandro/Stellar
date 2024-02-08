import React from 'react';
import Image from 'next/image';

export function Cameras() {
  return (
    <div>
      <h1 className='ml-4'>Refratores</h1>
      <div className='flex justify-evenly mt-2'>
        <div>
          <Image src="/img/refrator-primeiro.jpg" className='rounded' width={200} height={350} alt="logo do site" />
          <div className='mt-2'>
            <h2>Refrator </h2>
            <h3 className='ml-2'>R$ 300</h3>
          </div>
        </div>

        <div>
          <Image className='rounded-sm' src="/img/refrator-segundo.jpg" width={200} height={350} alt="" />
          <div className='mt-2'>
            <h2>Refrator </h2>
            <h3 className='ml-2'>R$ 300</h3>
          </div>
        </div>

        <div>
          <Image src="/img/refrator-quarto.jpg" width={200} height={350} alt="logo do site" />
          <div className='mt-2'>
            <h2>Refrator </h2>
            <h3 className='ml-2'>R$ 300</h3>
          </div>
        </div>

        <div>
          <Image src="/img/refrator-terceiro.png" width={200} height={350} alt="logo do site" />
          <div className='mt-2'>
            <h2>Refrator </h2>
            <h3 className='ml-2'>R$ 300</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
