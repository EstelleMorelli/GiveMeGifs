import Link from 'next/link';

const getCategories = async() => {
    const resultJSON = await fetch("https://moustoifa.com/projets/Oshop/public/api/v1/category/");
    const result = await resultJSON.json();
    return result;
  }

export default async function NavPage(){
    const categoriesList = await getCategories(); 
    return (
        <nav>
            <div>
                O'Shoes
            </div>
            <Link 
            href={`/`}
            > Accueil </Link>
            <button className=''> Catégories</button>
            <ul className="">
                <div className="py-1" role="none">
                    {categoriesList.map((category) => (
                    <Link key={category.id}
                    href={`/category/${category.id}`}
                    className="">{category.name}</Link>
                    ))}
                </div>
            </ul>
        </nav>
    )
}