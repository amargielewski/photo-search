import { Header } from "components/Header/Header";
import { ReactChild } from "react";
import { StyledContentContainer, StyledWrapper } from "./MainLayout.styled";

export type MainLayoutProps = {
  children: ReactChild[] | ReactChild;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledWrapper>
  );
};
