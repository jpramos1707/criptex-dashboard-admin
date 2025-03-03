
import { UserStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: UserStatus;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-green-900/50 text-green-400": status === "active",
          "bg-gray-800 text-gray-400": status === "inactive",
          "bg-yellow-900/50 text-yellow-400": status === "pending",
        },
        className
      )}
    >
      {status}
    </span>
  );
}
