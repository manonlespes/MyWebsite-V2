import { createContext, useEffect, useState } from "react";
import { PropsWithChildren, Theme, ThemeContextType } from "./ContextTypes";

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>({
    isLight: true,
    label: "emerald",
  });

  // useEffect(() => {
  //   // storing input theme
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);

  /*     useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      localStorage.setItem("name", JSON.stringify(name));
      if (storedTheme) setTheme(storedTheme);
    }
  }, []); */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeTheme = (event?: any) => {
    //const nextTheme: string | null = event.target.value || null;
    //const nextTheme = event.target.checked || null;

    // if (nextTheme) {
    //   setTheme(nextTheme);
    //   // Check if localStorage is available (client-side)
    //   if (typeof window !== "undefined") {
    //     localStorage.setItem("theme", nextTheme);
    //   }
    // } else {
    //setTheme((prev) => (prev.isLight ? {...prev, {label === 'black'}} : {...prev, label === "emerald" } ));

    setTheme((prev) => {
      if (prev.isLight) {
        return { isLight: event.target.checked, label: "black" };
      } else {
        return { isLight: event.target.checked, label: "emerald" };
      }
    });

    //   if (typeof window !== "undefined") {
    //     localStorage.setItem("theme", theme.label);
    //   }
    // }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
