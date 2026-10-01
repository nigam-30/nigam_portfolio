"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Read persisted theme or system preference
    const stored = localStorage.getItem("nm_portfolio_theme") as Theme | null;
    if (stored === "dark" || stored === "light") {
      setThemeState(stored);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      // Default to dark per prompt instructions
      setThemeState("dark");
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("nm_portfolio_theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
