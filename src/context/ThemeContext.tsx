import { createContext, useEffect, useState } from "react";
import { PropsWithChildren, Theme, ThemeContextType } from "./ContextTypes";

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>({
    isLight: true,
    label: "lightTheme",
  });

  useEffect(() => {
    // storing input theme
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        const initialValue = JSON.parse(storedTheme);
        setTheme(initialValue);
      }
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeTheme = (event?: any) => {
    const nextTheme: string | null = event.target.checked
      ? "lightTheme"
      : "darkTheme";

    if (nextTheme) {
      setTheme({ isLight: event.target.checked, label: nextTheme });
      // Check if localStorage is available (client-side)
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "theme",
          JSON.stringify({ isLight: event.target.checked, label: nextTheme })
        );
      }
    } else {
      setTheme((prev) => {
        if (prev.isLight) {
          return { isLight: event.target.checked, label: "darkTheme" };
        } else {
          return { isLight: event.target.checked, label: "lightTheme" };
        }
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("theme", JSON.stringify(theme));
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
