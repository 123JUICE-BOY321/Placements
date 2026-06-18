import { createContext, useState, ReactNode } from "react";

export const ThemeContext = createContext({
  dark: false,
  setDark: (value: boolean) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? "theme-dark" : "theme-light"}>{children}</div>
    </ThemeContext.Provider>
  );
}
