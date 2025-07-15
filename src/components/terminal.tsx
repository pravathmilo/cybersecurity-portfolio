
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface TerminalProps {
  className?: string;
  text: string;
  speed?: number;
  prompt?: string;
  autostart?: boolean;
  loop?: boolean;
  delay?: number;
}

export function Terminal({
  className,
  text,
  speed = 50,
  prompt = ">",
  autostart = true,
  loop = false,
  delay = 3000,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(autostart);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping && currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (isTyping && currentIndex >= text.length) {
      setIsTyping(false);
      if (loop) {
        timer = setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
          setIsTyping(true);
        }, delay);
      }
    }

    return () => clearTimeout(timer);
  }, [isTyping, currentIndex, text, speed, loop, delay]);

  return (
    <div
      className={cn(
        "font-mono rounded-md border border-cyber-blue/40 bg-cyber-dark/80 p-4 text-cyber-blue shadow-lg cyber-glowing-border relative overflow-hidden",
        className
      )}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-cyber-blue/20">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-cyber-red"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-blue"></div>
        </div>
        <div className="text-xs text-cyber-blue/70">bash@kali:~</div>
      </div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-cyber-blue/5 animate-scanline pointer-events-none"></div>
      
      {/* Terminal content */}
      <div className="flex items-center gap-1">
        <span className="text-cyber-blue">{prompt}</span>
        <span className="whitespace-pre-wrap">{displayedText}</span>
        {isTyping && (
          <span className="inline-block h-4 w-2 animate-pulse bg-cyber-blue"></span>
        )}
      </div>
      
      {/* Shadow overlay */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}
