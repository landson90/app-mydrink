export function List() {
  return (
    <div className="p-2 flex flex-col justify-center mt-10">
      <h3 className="text-2xl font-bold text-center mb-3">Categorias</h3>
      <hr />
      <ul className="mt-2 flex flex-col items-center mt-5">
        <li>
          <a className="items-center w-36 h-10  text-black font-bold  hover:border-lime-600  hover:border-b-2 hover:text-black transition ease-in-out delay-150 duration-100">
            Teste
          </a>
        </li>
      </ul>
    </div>
  );
}
