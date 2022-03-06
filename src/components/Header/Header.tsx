import {
  StyledTitle,
  StyledToggleButton,
  StyledWrapper,
} from "./Header.styled";

//providers
import { useThemeModeContext } from "Providers";

//icons
import { MoonIcon, SunIcon } from "icons";

//constans
import { paths } from "constans";

export const Header = () => {
  const themeModeContext = useThemeModeContext();

  return (
    <StyledWrapper>
      <StyledTitle to={paths.home}>photo search</StyledTitle>
      <StyledToggleButton onClick={themeModeContext?.toggleThemeMode}>
        {themeModeContext?.mode === "dark" && <SunIcon />}
        {themeModeContext?.mode === "light" && <MoonIcon />}
      </StyledToggleButton>
    </StyledWrapper>
  );
};
