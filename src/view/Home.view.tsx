import { useEffect, useState } from "react";
import { CardLater } from "../components/CardLater";
import { CardMain } from "../components/CardMain";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Table } from "../components/Table";
import ApiService from "../core/services/api.service";
interface Categories {
  strCategory: string;
}

export function HomeView() {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    ApiService.getCategory().then((response) => {
      if (response.data) {
        setCategories(response.data.drinks);
      }
    });
  }, []);

  return (
    <>
      <div className="h-40 w-full flex justify-center items-center">
        <section>
          <Header title="MyDrink" />
        </section>
      </div>
      <div className="bg-slate-100 h-screen w-screen flex gap-20 p-10">
        <section>
          <CardLater>
            <List categories={categories} />
          </CardLater>
        </section>
        <section>
          <CardMain>
            <Table />
          </CardMain>
        </section>
      </div>
    </>
  );
}
