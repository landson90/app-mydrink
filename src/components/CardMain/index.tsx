import { ReactNode } from "react";

interface CardMainProps {
  children: ReactNode;
}

export function CardMain({ children }: CardMainProps) {
  return <div>{children}</div>;
}
