import { ReactChild } from "react";
import { useThemeModeContext } from "./themeMode";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "theme";
//style
import { GlobalStyle } from "styles";
import { useLayoutContext } from "hooks/useLayoutContext";

type ThemeProviderProps = {
  children: ReactChild;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeModeContext = useThemeModeContext();
  const context = useLayoutContext();
  return (
    <StyledThemeProvider theme={theme[themeModeContext?.mode ?? "light"]}>
      <GlobalStyle lock={context.lockBodyScroll} />
      {children}
    </StyledThemeProvider>
  );
};
