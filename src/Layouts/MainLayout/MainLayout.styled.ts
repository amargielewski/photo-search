import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  transition: 0.5s ease-in;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 50px 0;
`;

export const StyledContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  padding: 0 20px;
`;
