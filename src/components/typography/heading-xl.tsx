import { cn } from "@/lib/utils";

export default function HeadingXL({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={cn("text-4xl font-bold tracking-tight", className)}>
      {children}
    </h2>
  );
}
