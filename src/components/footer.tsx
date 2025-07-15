
import React from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-t border-cyber-blue/20 bg-cyber-dark py-6",
        className
      )}
      {...props}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} Cyber Security Portfolio. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-500 md:text-left">
            Built with React, Tailwind CSS, and a passion for security.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pravathmilo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-cyber-blue"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com/Captainmil58496"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-cyber-blue"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aitham-sri-muslamani-pravath-7a5293253/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-cyber-blue"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
