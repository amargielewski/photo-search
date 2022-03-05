import { StyledTitle, StyledWrapper } from "./Header.styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledTitle to="/">photo search</StyledTitle>
    </StyledWrapper>
  );
};
