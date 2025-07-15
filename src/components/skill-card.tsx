
import { cn } from "@/lib/utils";
import React from "react";

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  level?: number;
  variant?: "blue" | "green" | "red" | "purple";
}

export function SkillCard({
  title,
  icon,
  level = 0,
  variant = "blue",
  className,
  ...props
}: SkillCardProps) {
  const variantClasses = {
    blue: "border-cyber-blue/50 bg-cyber-dark/80 text-cyber-blue hover:border-cyber-blue",
    green: "border-cyber-green/50 bg-cyber-dark/80 text-cyber-green hover:border-cyber-green",
    red: "border-cyber-red/50 bg-cyber-dark/80 text-cyber-red hover:border-cyber-red",
    purple: "border-cyber-purple/50 bg-cyber-dark/80 text-cyber-purple hover:border-cyber-purple",
  };

  const levelBars = Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className={cn(
        "h-1 w-full rounded-full transition-colors",
        i < level ? 
          variant === "blue" ? "bg-cyber-blue" : 
          variant === "green" ? "bg-cyber-green" : 
          variant === "red" ? "bg-cyber-red" : 
          "bg-cyber-purple" 
        : "bg-gray-700"
      )}
    />
  ));

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg border bg-cyber-dark/50 p-4 transition-all duration-300 hover:shadow-md",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className="mb-4 flex items-center gap-3">
        {icon && <div className="text-xl">{icon}</div>}
        <h3 className="font-mono text-lg font-bold">{title}</h3>
      </div>
      <div className="mt-auto flex w-full flex-row gap-1">{levelBars}</div>
    </div>
  );
}
