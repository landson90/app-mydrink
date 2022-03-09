import { CardLater } from "../components/CardLater";
import { CardMain } from "../components/CardMain";
import { Header } from "../components/Header";
import { List } from "../components/List";

export function HomeView() {
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
            <List />
          </CardLater>
        </section>
        <section>
          <CardMain />
        </section>
      </div>
    </>
  );
}
