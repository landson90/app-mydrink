import { ReactNode } from "react";

interface CardLaterProps {
  children: ReactNode;
}
export function CardLater({ children }: CardLaterProps) {
  return (
    <div className="h-96 w-64	 bg-slate-100 rounded-lg border-solid border-2">
      {children}
    </div>
  );
}
