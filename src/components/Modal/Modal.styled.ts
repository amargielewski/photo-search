import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: #000000b3;
`;

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const StyledModalBox = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const StyledCloseButton = styled.button`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  position: absolute;
  top: 0px;
  right: 0;
  border: none;
  background: none;
  transition: 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: ${({ theme }) => theme.colors.text_primary};

  :hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.text_primary};
  }
`;

export const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const StyledUserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const StyledModalImage = styled.img`
  max-width: 900px;
  width: 100%;
  max-height: 700px;
`;

export const StyledPhotoInfoContainer = styled.div`
  display: flex;
  gap: 0 20px;
  color: ${({ theme }) => theme.colors.text_primary};

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;

const InfoBox = css`
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const StyledDateBox = styled.div`
  ${InfoBox}
`;

export const StyledLocationBox = styled.div`
  ${InfoBox}
`;

export const StyledLocationTextBox = styled.div`
  display: flex;
  gap: 0 5px;
`;
