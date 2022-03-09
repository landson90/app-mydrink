import { ReactNode } from "react";

interface CardLaterProps {
  children: ReactNode;
}
export function CardLater({ children }: CardLaterProps) {
  return (
    <div className="h-3/6 w-52 bg-slate-100 rounded-lg border-solid border-2">
      {children}
    </div>
  );
}
