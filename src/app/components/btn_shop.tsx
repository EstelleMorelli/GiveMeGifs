"use client"

import { ShoppingCart } from "react-feather";

export default function ButtonShopping() {
return (
    <button className="bg-slate-800 text-white flex flex-row p-1 rounded">
        <div className="p-1"><ShoppingCart /> </div>
        <div className="p-1"> Ajouter au panier </div>
    </button>
)
}