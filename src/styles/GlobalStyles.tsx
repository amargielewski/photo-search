import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";

export const GlobalStyle = createGlobalStyle<{
  lock: boolean;
}>`
${resetCSS}



body,html,* {
   font-family: 'Montserrat', sans-serif;
   box-sizing: border-box;
  overflow: ${({ lock }) => (lock ? "hidden" : "unset")};
   
}

`;
