// src/components/navbar.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Terminal } from "lucide-react";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-cyber-blue/20 bg-cyber-dark/80 backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-cyber-blue" />
          <span className="font-mono text-xl font-bold text-white">
            <span className="text-cyber-blue">$</span> Command_center
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-blue"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-blue"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-blue"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-blue"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-cyber-blue"
          >
            Contact
          </a>
        </nav>

        {/* Download CV Link (visible md+) */}
        <a
          href="/CV.docx"
          download
          className="hidden md:inline-block"
        >
          <Button
            variant="outline"
            className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10"
          >
            Download CV
          </Button>
        </a>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden text-cyber-blue"
          size="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
}
