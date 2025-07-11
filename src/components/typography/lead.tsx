import { cn } from "@/lib/utils";

export default function Lead({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn("text-xl font-medium", className)}>{children}</p>;
}
