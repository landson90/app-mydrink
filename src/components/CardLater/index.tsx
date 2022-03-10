import { ReactNode } from "react";

interface CardLaterProps {
  children: ReactNode;
}
export function CardLater({ children }: CardLaterProps) {
  return <div className="h-96 w-64">{children}</div>;
}
