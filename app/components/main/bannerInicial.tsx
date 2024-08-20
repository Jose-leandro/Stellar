import React from "react";
import Image from "next/image";

export function BannerInicial() {
  return (
    <div className="my-8">
      <h1 className="ml-6">Promoções e ofertas</h1>
      <div className="flex flex-wrap justify-evenly mt-4">
        <div className="flex flex-col justify-evenly w-auto bg-slate-900 py-8 px-4">
          <p>Oferta do dia</p>
        </div>

        <div className="flex flex-col justify-evenly">
          <p>Compra seu Binoculos hoje por apenas R$ 300</p>
        </div>

        <div className="flex flex-col justify-evenly">
          <p>Refratores com discontos de 15%</p>
        </div>

        <div className="flex flex-col justify-evenly">
          <p>Que tal levra sua camêra hoje</p>
        </div>
      </div>
    </div>
  );
}
