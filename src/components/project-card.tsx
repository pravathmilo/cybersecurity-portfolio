
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";
import { CyberBadge } from "./ui/cyber-badge";
import { Button } from "./ui/button";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  badges?: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

export function ProjectCard({
  title,
  description,
  icon,
  imageUrl,
  badges = [],
  demoUrl,
  caseStudyUrl,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-cyber-blue/30 bg-cyber-dark/80 transition-all duration-300 hover:border-cyber-blue/70 hover:shadow-[0_0_15px_rgba(0,179,230,0.3)]",
        className
      )}
      {...props}
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center gap-3">
          {icon && <div className="text-cyber-blue text-xl">{icon}</div>}
          <h3 className="font-mono text-xl font-bold text-white">{title}</h3>
        </div>

        <p className="mb-4 text-gray-300">{description}</p>

        {badges.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <CyberBadge
                key={index}
                variant={
                  (["blue", "green", "red", "purple"][
                    index % 4
                  ] as "blue" | "green" | "red" | "purple")
                }
              >
                {badge}
              </CyberBadge>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {demoUrl && (
            <Button
              variant="default"
              size="sm"
              className="bg-cyber-blue hover:bg-cyber-bright-blue text-black"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
          )}
          {caseStudyUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10"
              asChild
            >
              <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer">
                Case Study
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
