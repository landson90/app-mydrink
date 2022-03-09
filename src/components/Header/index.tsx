interface HeaderProsp {
  title: string;
}

export function Header({ title }: HeaderProsp) {
  return (
    <>
      <header className="h-40 w-screen bg-amber-200 flex justify-center items-center">
        <h2 className="text-3xl font-bold">{title}</h2>
      </header>
    </>
  );
}
