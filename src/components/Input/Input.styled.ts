import styled from "styled-components";

export const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  padding: 10px 15px;
  padding-left: 40px;
  border: none;
  color: ${({ theme }) => theme.colors.text_primary};

  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_primary};

  ::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledIconWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.text_primary};
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
