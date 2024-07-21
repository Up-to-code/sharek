import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
function MaxWidth({ children, className }: Props) {
  return (
    <div
      className={cn(
        "max-w-screen-lg bg-white text-zinc-900  m-auto flex flex-col  min-h-[600px] h-screen px-1.5 sm:px-4 md:px-5 lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidth;
