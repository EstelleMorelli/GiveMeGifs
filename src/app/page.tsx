import Image from "next/image";
import Link from 'next/link';

const getShoes = async() => {
  const resultJSON = await fetch("https://moustoifa.com/projets/Oshop/public/api/v1/product/");
  const result = await resultJSON.json();
  return result;
}

export default async function Home() {
  const shoesList = await getShoes();
  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <main className="p-4 text-center text-black">
      <h1 className="text-2xl font-bold">O'Shoes</h1>
      <h2 className="text-base">
          La liste de nos belles chaussures
        </h2>
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
  );
}
