import { CardLater } from "../components/CardLater";
import { Header } from "../components/Header";
import { List } from "../components/List";

export function HomeView() {
  return (
    <>
      <Header title="MyDrynks" />
      <div className="justify-around bg-slate-100 p-3 h-screen grid gap-4 grid-cols-2">
        <CardLater>
          <List />
        </CardLater>
        <div>conteudo principal</div>
      </div>
    </>
  );
}
