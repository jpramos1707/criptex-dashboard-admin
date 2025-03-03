
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
          "bg-green-100 text-green-800": status === "active",
          "bg-gray-100 text-gray-800": status === "inactive",
          "bg-yellow-100 text-yellow-800": status === "pending",
        },
        className
      )}
    >
      {status}
    </span>
  );
}
