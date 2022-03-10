import { createContext, ReactNode, useEffect, useState } from "react";
import ApiService from "../services/api.service";

interface ITransactionsProvider {
  children: ReactNode;
}

interface Drinks {
  strCategory: string;
}

interface DrinkContextData {
  drinks: Drinks[];
}
export const DrinkContext = createContext<DrinkContextData>(
  {} as DrinkContextData
);

export function DrinkProvider({ children }: ITransactionsProvider) {
  const [drinks, setDrinks] = useState<Drinks[]>([]);

  useEffect(() => {
    ApiService.getCategory().then((response) =>
      setDrinks(response.data.drinks)
    );
  }, []);

  return (
    <DrinkContext.Provider value={{ drinks }}>{children}</DrinkContext.Provider>
  );
}
