import React from "react";
import FilterProducts from "./filterProducts/filterProducts";

export default function Popularproducts() {
    return (
        <>
        <div className="flex">
        <h1>Categories</h1>

        <p></p>
        </div>

        <div className="flex">
            <FilterProducts />

            <TopProcuts></TopProcuts>
        </div>
        </>
    )
}