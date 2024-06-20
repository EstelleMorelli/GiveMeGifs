import { Phone } from 'react-feather';

export default function HeaderPage(){
    return (
        <header className="bg-slate-100 text-black flex flex-row">
         <div className="p-4"><Phone /></div>
        <div className="p-4">
        01 02 03 04 05 
        </div>
        <div className="p-4">
            Livraison offerte à partir de 100€
        </div>
        </header>
    )
}