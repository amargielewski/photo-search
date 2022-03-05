import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
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
