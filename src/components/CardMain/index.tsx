import { ReactNode } from "react";

interface CardMainProps {
  children: ReactNode;
}

export function CardMain({ children }: CardMainProps) {
  return <div className="h-44 w-full	 bg-slate-100 rounded-lg">{children}</div>;
}
