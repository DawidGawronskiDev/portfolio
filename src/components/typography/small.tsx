import { cn } from "@/lib/utils";

export default function Small({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn("text-sm font-normal", className)}>{children}</p>;
}
