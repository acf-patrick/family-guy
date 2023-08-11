"use client";

import styled from "styled-components";

const StyledContainer = styled.main`
  max-width: 860px;
  margin: auto;
  padding: 0 1rem;
  
  h1 {
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1.5rem;
  }
`;

export default StyledContainer;
