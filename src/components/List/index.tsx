interface Categories {
  strCategory: string;
}

interface CategoryiesProps {
  categories: Categories[];
}
export function List({ categories }: CategoryiesProps) {
  return (
    <div className="p-2 flex flex-col mt-10 border-2">
      <h3 className="text-2xl font-bold text-center mb-3">
        Escolha uma categoria
      </h3>
      <hr />
      <ul className="flex flex-col cursor-pointer">
        {categories.map((c) => {
          return (
            <li className="p-1" key={c.strCategory}>
              <a className="flex flex-col justify-center items-center w-full h-10 bg-slate-100 rounded-full text-cyan-500 font-bold hover:bg-cyan-50 hover:text-black transition ease-in-out delay-150 duration-700">
                {c.strCategory}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
