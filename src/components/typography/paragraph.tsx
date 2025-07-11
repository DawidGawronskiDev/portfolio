import { cn } from "@/lib/utils";

export default function Paragraph({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn("text-base font-normal", className)}>{children}</p>;
}
