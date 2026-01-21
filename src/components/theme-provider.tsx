import { createContext, useContext, useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";
type Color = "default" | "rose" | "violet";

type ThemeProviderState = {
  mode: Mode;
  color: Color;
  setMode: (mode: Mode) => void;
  setColor: (color: Color) => void;
};

const initialState: ThemeProviderState = {
  mode: "light" as Mode,
  color: "theme-default" as Color,
  setMode: (mode: Mode) => {},
  setColor: (color: Color) => {},
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("system");
  const [color, setColor] = useState<Color>("default");

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark", "violet", "rose");

    let activeMode = mode;

    if (mode === "system") {
      activeMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    root.classList.add(activeMode);

    if (color !== "default") {
      root.classList.add(color);
    }
  }, [mode, color]);

  return (
    <ThemeProviderContext.Provider value={{ mode, color, setMode, setColor }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context; // This is the missing piece
};
