import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApiService from "../../core/services/api.service";

interface Drink {
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrink: string;
  strDrinkThumb: string;
}

export function CardDetailsDrink() {
  const params = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink[]>([]);

  useEffect(() => {
    ApiService.findByDrink(params.id).then((response) => {
      setDrink(response.data.drinks);
      console.log(drink, 1);
      console.log(response, 2);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      {drink.map((d) => {
        return (
          <>
            <img
              src={d.strDrinkThumb}
              alt={d.idDrink}
              className="rounded-md w-60"
            />
            <h1>{d.idDrink}</h1>
            <h1>{d.strAlcoholic}</h1>
            <h1>{d.strCategory}</h1>
            <h1>{d.strDrink}</h1>
            <Link to={"/"}>Voltar</Link>
          </>
        );
      })}
    </div>
  );
}
