import React from 'react';
import {CategoriasPopulares} from './categoriasPopulares';
import {BannerInicial} from './bannerInicial';
import {Refratores} from './refratores';
import {Binoculos} from './binoculos';
import {Cameras} from './cameras';
import {FotosAstronomicas} from './fotosAstronomicas';
export function Main() {
  return (
    <>
      <BannerInicial />
      <CategoriasPopulares />
      <Refratores />
      <Binoculos />
      <Cameras />
      <FotosAstronomicas />
    </>
  );
}
