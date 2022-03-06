import { ReactChild } from "react";

//styled
import { StyledContentContainer, StyledWrapper } from "./MainLayout.styled";

//componentss
import { Footer, Header } from "components";
import { useLayoutContext } from "hooks/useLayoutContext";

export type MainLayoutProps = {
  children: ReactChild[] | ReactChild;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContentContainer>{children}</StyledContentContainer>
      <Footer />
    </StyledWrapper>
  );
};
