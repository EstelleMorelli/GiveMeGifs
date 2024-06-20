"use client"

import Link from 'next/link';
import { useState } from 'react';
import DropdownBtn from './btn_dropdown';

const categoriesList = [
    { id: 1, name: "Détente" },
    { id: 2, name: "Au travail" },
    { id: 3, name: "Cérémonie" },
    { id: 4, name: "Sortir" },
    { id: 5, name: "Vintage" },
    { id: 6, name: "Piscine et bains" },
    { id: 7, name: "Sport" }
  ]
  
  const brandsList = [
    { id: 1, name: "oCirage", index: 0 },
    { id: 2, name: "BOOTstrap", index: 1 },
    { id: 3, name: "Talonette", index: 2 },
    { id: 4, name: "Shossures", index: 3 },
    { id: 5, name: "Oshoes", index: 4 },
    { id: 6, name: "Pattes d'eph", index: 5 },
    { id: 7, name: "PHPieds", index: 6 },
    { id: 8, name: "oPompes", index: 7 }
  ]
  
  const typesList = [
    { id: 1, name: "Chaussures de ville", index: 0 },
    { id: 2, name: "Chaussures de sport", index: 1 },
    { id: 3, name: "Tongs", index: 2 },
    { id: 4, name: "Chaussures ouvertes", index: 3 },
    { id: 5, name: "Talons éguilles", index: 4 },
    { id: 6, name: "Talons", index: 5 },
    { id: 7, name: "Pantoufles", index: 6 },
    { id: 8, name: "Chaussons", index: 7 }
  ];

export default function NavPage(){ 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <nav className="flex flex-row">
            <div className='p-5'>
                O'Shoes
            </div>
            <div className='flex flex-1 justify-center p-3 text-center'>
            <Link className="px-10 py-2" 
            href={`/`}
            > Accueil </Link>
            <DropdownBtn title="Catégories" list={categoriesList}/>
            <DropdownBtn title="Marques" list={brandsList}/>
            <DropdownBtn title="Types" list={typesList}/>
            </div>
        </nav>
    )
}