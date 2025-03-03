
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  className?: string;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
}

export default function DashboardCard({
  title,
  value,
  icon,
  className,
  trend,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          {trend && (
            <p
              className={cn(
                "text-xs font-medium mt-1",
                trend.positive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend.positive ? "↑" : "↓"} {trend.value}% {trend.label}
            </p>
          )}
        </div>
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}
