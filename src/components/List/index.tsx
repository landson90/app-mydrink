interface Categories {
  strCategory: string;
}

interface CategoryiesProps {
  categories: Categories[];
}
export function List({ categories }: CategoryiesProps) {
  return (
    <div className="p-2 flex flex-col justify-center mt-10">
      <h3 className="text-2xl font-bold text-center mb-3">Categorias</h3>
      <hr />
      <ul className="flex flex-col items-center cursor-pointer">
        {categories.map((c) => {
          return (
            <li className="p-1" key={c.strCategory}>
              <a className="items-center w-36 h-10  text-sky-700 font-bold  hover:border-lime-600  hover:border-b-2 hover:text-sky-900 transition ease-in-out delay-150 duration-100">
                {c.strCategory}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
