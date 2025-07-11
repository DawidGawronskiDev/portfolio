import { cn } from "@/lib/utils";

export default function Display({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={cn("text-5xl font-bold tracking-tight", className)}>
      {children}
    </h1>
  );
}
