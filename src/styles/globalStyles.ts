"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: unset;
    padding: unset;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.quinary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
