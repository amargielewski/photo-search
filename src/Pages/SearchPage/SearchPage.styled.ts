import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px 0;
  position: relative;
  margin-top: 20px;
  .masonry-grid {
    display: flex;
    margin-left: -20px;
    width: auto;
  }
  .masonry-grid_column {
    padding-left: 20px;
    background-clip: padding-box;
  }

  .masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledCardWrapper = styled.div`
  cursor: pointer;
  max-width: 400px;
`;

export const StyledNavigateButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text_primary};
  padding: 5px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  background: transparent;
  transition: 0.4s;

  :hover {
    background-color: ${({ theme }) => theme.colors.text_primary};
    color: ${({ theme }) => theme.colors.primary};
    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
