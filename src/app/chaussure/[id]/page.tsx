import ButtonShopping from "@/app/components/btn_shop";
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
        <div className="flex justify-center h-screen bg-white">
            <main className="text-center text-black">
                
                <div className="flex flex-row">
                    <Image className="w-1/3 p-4 rounded" width="50" height="50" src={`/${shoeToDisplay.picture}`} alt="image de la chaussure"/>
                        <div className="w=1/3 flex-col text-start p-2">
                            <h1 className="text-4xl pt-10 font-bold">{shoeToDisplay.name}</h1>

                            <p className="p-2"> by {shoeToDisplay.brand.name}</p>
                            <p className="p-2 font-bold"> 
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-white">{shoeToDisplay.type.name}</span>
                            </span></p>
                            <p className="p-2 text-2xl text-slate-500">{shoeToDisplay.price},00 € TTC</p>
                            <ButtonShopping />
                            <p className="pt-10">
                                {shoeToDisplay.description}
                            </p>
                        </div>
                </div>
            </main>
    </div>
    )
}