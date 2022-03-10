import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../core/axios/api";
import { DrinkContext } from "../../core/contextApi/DrinkContext";
import ApiService from "../../core/services/api.service";

interface Drinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export function Table() {
  const { drinks } = useContext(DrinkContext);

  return (
    <div className="flex gap-1 flex-wrap justify-around">
      {drinks.map((d) => {
        return (
          <div
            className="flex flex-col justify-around items-center bg-zinc-50 w-56 h-70
          border-solid border-2 rounded-lg group"
            key={d.strDrink}
          >
            <header className="flex justify-center">
              <img
                className="w-full rounded-lg"
                src={d.strDrinkThumb}
                alt={d.strDrink}
              />
            </header>
            <section className="flex flex-col justify-around items-center mt-2">
              <h3 className="italic-">{d.strDrink}</h3>

              <Link
                to={`drinks/${d.idDrink}`}
                className="text-sky-700 font-bold  hover:border-lime-600  hover:border-b-2 hover:text-sky-900 transition ease-in-out delay-150 duration-100"
              >
                Detalhes
              </Link>
            </section>
          </div>
        );
      })}
    </div>
  );
}
