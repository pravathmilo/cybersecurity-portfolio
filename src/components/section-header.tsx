
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={cn(
        "mb-10 space-y-2",
        alignClasses[align],
        className
      )}
      {...props}
    >
      <h2 className="relative inline-block font-mono text-3xl font-bold text-white">
        <span className="relative z-10">{title}</span>
        <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-cyber-blue/20"></span>
      </h2>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}
