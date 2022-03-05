import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: column;
  gap: 50px 0;
`;

export const StyledContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;
