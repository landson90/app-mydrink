import { CardLater } from "../components/CardLater";
import { CardMain } from "../components/CardMain";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Table } from "../components/Table";

export function HomeView() {
  return (
    <>
      <div className="h-40 w-full flex justify-center items-center">
        <section>
          <Header title="MyDrink" />
        </section>
      </div>
      <div className="flex gap-7 p-10">
        <section>
          <CardLater>
            <List />
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
