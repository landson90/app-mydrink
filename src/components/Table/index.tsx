import { useEffect, useState } from "react";
import { api } from "../../core/axios/api";
import ApiService from "../../core/services/api.service";

interface Drinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export function Table() {
  const [drinks, setDrinks] = useState<Drinks[]>([]);

  useEffect(() => {
    ApiService.allDrinksByCategory("a").then((response) => {
      if (response.data) {
        setDrinks(response.data.drinks);
      }
      console.log(drinks);
    });
  }, []);
  return (
    <div className="flex gap-1 flex-wrap justify-around">
      {drinks.map((d) => {
        return (
          <div
            className="flex flex-col justify-around items-center bg-zinc-50 w-56 h-70
          border-solid border-2 rounded-lg group"
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
              <button className="mt-2">Detalhes</button>
            </section>
          </div>
        );
      })}
    </div>
  );
}
