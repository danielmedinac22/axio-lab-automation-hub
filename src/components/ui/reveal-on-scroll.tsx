
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Determinar las clases para la dirección de animación
  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-10 opacity-0";
        case "down":
          return "-translate-y-10 opacity-0";
        case "left":
          return "translate-x-10 opacity-0";
        case "right":
          return "-translate-x-10 opacity-0";
        default:
          return "translate-y-10 opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 opacity-100";
  };

  return (
    <div
      ref={ref}
      className={cn(
        getDirectionClass(),
        "transition-all transform",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
