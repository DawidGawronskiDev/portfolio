import { cn } from "@/lib/utils";

export default function HeadingL({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={cn("text-3xl font-bold tracking-tight", className)}>
      {children}
    </h2>
  );
}
