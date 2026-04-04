"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ComputerIcon,
  Moon02Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";

type Theme = "light" | "dark" | "system";

interface ThemeToggleProps {
  compact?: boolean;
}

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme: Theme =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  const options: Array<{
    value: Theme;
    label: string;
    icon: typeof Sun01Icon;
  }> = [
    { value: "light", label: "Light", icon: Sun01Icon },
    { value: "dark", label: "Dark", icon: Moon02Icon },
    { value: "system", label: "System", icon: ComputerIcon },
  ];

  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full border border-border bg-muted/40",
          compact ? "h-10 w-10 justify-center" : "h-10 w-26.5 p-1",
        )}
        aria-hidden="true"
      />
    );
  }

  if (compact) {
    const currentIcon = options.find((o) => o.value === activeTheme)?.icon;

    const cycleTheme = () => {
      if (activeTheme === "light") {
        setTheme("dark");
        return;
      }

      if (activeTheme === "dark") {
        setTheme("system");
        return;
      }

      setTheme("light");
    };

    return (
      <button
        type="button"
        aria-label={`Theme: ${activeTheme}. Tap to switch theme`}
        onClick={cycleTheme}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <HugeiconsIcon icon={currentIcon ?? Sun01Icon} size={16} />
      </button>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 p-1"
      role="radiogroup"
      aria-label="Theme mode"
    >
      {options.map((option) => {
        const active = activeTheme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            onClick={() => setTheme(option.value)}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors",
              active && "bg-background text-foreground shadow-sm",
            )}
          >
            <HugeiconsIcon icon={option.icon} size={16} />
          </button>
        );
      })}
    </div>
  );
}
