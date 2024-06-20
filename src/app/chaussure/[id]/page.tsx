import Image from "next/image";

const getShoe = async (id: number) => {
    const resultJSON = await fetch(`https://moustoifa.com/projets/Oshop/public/api/v1/product/${id}`);
    const result = await resultJSON.json();
    return result;
};

export default async function ShoePage({
    params,
}:{
    params: {id: number};
}) {
    const shoeToDisplay = await getShoe(params.id);
    return (
        <div className="flex flex-col justify-between h-screen">
        <main className="p-4 text-center">
          <h1 className="text-2xl text-fuchsia-600 font-bold">{shoeToDisplay.name}</h1>
          <div className="flex">
          <Image width="50" height="50" src={`/${shoeToDisplay.picture}`} alt="image de la chaussure"/>
            </div>
            <p>
               {shoeToDisplay.description}
             </p>
      </main>
    </div>
    )
}