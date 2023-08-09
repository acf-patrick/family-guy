"use client";

import { styled } from "styled-components";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.quinaryVariant};
`;

export default StyledNavigation;
