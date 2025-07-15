
import { cn } from "@/lib/utils";
import React from "react";

interface CyberBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "green" | "red" | "purple";
}

export function CyberBadge({
  children,
  className,
  variant = "blue",
  ...props
}: CyberBadgeProps) {
  const variantClasses = {
    blue: "border-cyber-blue bg-cyber-dark/50 text-cyber-blue",
    green: "border-cyber-green bg-cyber-dark/50 text-cyber-green",
    red: "border-cyber-red bg-cyber-dark/50 text-cyber-red",
    purple: "border-cyber-purple bg-cyber-dark/50 text-cyber-purple",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
