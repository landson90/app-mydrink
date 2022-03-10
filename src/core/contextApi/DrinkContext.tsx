import { createContext, ReactNode, useEffect, useState } from "react";
import ApiService from "../services/api.service";

interface ITransactionsProvider {
  children: ReactNode;
}

interface Drinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface Categories {
  strCategory: string;
}
interface DrinkContextData {
  categories: Categories[];
  allBeveragesByCategory: (category: string) => Promise<void>;
  drinks: Drinks[];
}
export const DrinkContext = createContext<DrinkContextData>(
  {} as DrinkContextData
);

export function DrinkProvider({ children }: ITransactionsProvider) {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [drinks, setDrinks] = useState<Drinks[]>([]);

  useEffect(() => {
    ApiService.getCategory().then((response) =>
      setCategories(response.data.drinks)
    );
  }, []);

  async function allBeveragesByCategory(category: string) {
    ApiService.allDrinksByCategory(category).then((response) => {
      setDrinks(response.data.drinks);
    });
  }
  return (
    <DrinkContext.Provider
      value={{ categories, allBeveragesByCategory, drinks }}
    >
      {children}
    </DrinkContext.Provider>
  );
}
