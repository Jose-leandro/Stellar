import React from "react";

export default function ProductsSearch() {
    
    retrun (
        <input
        onChange={buscaProdutos}
        placeholder="Encontre produtos"
        className="border-slate-700 border rounded-md bg-transparent py-2 px-3 w-auto placeholder:ml-4"
      />
    )
}