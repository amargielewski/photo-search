import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_primary}1a;
`;

export const StyledTitle = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_primary};
  letter-spacing: 2px;
  font-family: "Smooch Sans", sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  padding: 15px 0;
`;

export const StyledToggleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text_primary};

  font-size: ${({ theme }) => theme.fontSizes.l}px;
`;
