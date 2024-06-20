import Link from 'next/link';
import Image from "next/image";

const getProductsFromCateg = async(id: number) => {
    const resultJSON = await fetch(`https://moustoifa.com/projets/Oshop/public/api/v1/category/${id}`);
    const result = await resultJSON.json();
    return result;
  }

export default async function NavPage({
    params,
}:{
    params: {id: number};
}) {
    const shoesList = await getProductsFromCateg(params.id);
    return (
        <div className="flex flex-col bg-white">
      <main className="p-4 text-center text-black">
        <div className="flex flex-wrap">
          {shoesList.map((shoe) => (
             <Link key={shoe.id}
              href={`/chaussure/${shoe.id}`}
              className="w-1/4 hover:bg-slate-100 p-4 rounded"
            >
            <div className="flex justify-center items-center">
              <Image className="w-1/4 hover:bg-slate-100 p-4 rounded" width="100" height="100" src={`/${shoe.picture}`} alt="image de la chaussure"/>
              </div>
             <h3>{shoe.name}</h3>
             <p>
               {shoe.description}
             </p>
             </Link>
          ))}
        </div>
        </main>
      </div>
    )
}