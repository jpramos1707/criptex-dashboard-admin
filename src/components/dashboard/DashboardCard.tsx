
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  textColor?: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  className,
  trend,
  textColor = "text-white",
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-800 bg-card p-6 shadow-sm transition-all hover:shadow-md animate-fade-in",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className={cn("text-2xl font-bold mt-2", textColor)}>{value}</h3>
          {trend && (
            <p
              className={cn(
                "text-xs font-medium mt-1",
                trend.positive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.positive ? "↑" : "↓"} {trend.value}% {trend.label}
            </p>
          )}
        </div>
        {icon && (
          <div className="p-2 rounded-full bg-gray-800 text-criptex-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
