import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { PropsWithChildren } from "./ContextTypes";

export default function ClientThemeWrapper({ children }: PropsWithChildren) {
  const { theme } = useContext(ThemeContext);
  return <div data-theme={theme?.label}>{children}</div>;
}
