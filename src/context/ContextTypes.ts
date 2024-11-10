import { ChangeEvent, ReactNode } from "react";

// avoid optional children from react
// more info : https://dev.to/maafaishal/unsafe-propswithchildren-utility-type-in-react-typescript-app-3bd3
export type PropsWithChildren<P = unknown> = P & { children: ReactNode };

export interface ThemeContextType {
  theme?: Theme;
  changeTheme?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

export interface Theme {
  isLight: boolean;
  label: string;
}
