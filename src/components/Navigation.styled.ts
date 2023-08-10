"use client";

import { styled } from "styled-components";
import { darken } from "polished";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.quinaryVariant};
  z-index: 2;

  a:last-of-type {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.quinary};
    padding: 0.75rem 1rem;
    font-weight: bold;
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.secondary};
    border-bottom: 5px solid
      ${({ theme }) => darken(0.3, theme.colors.secondary)};
    transform: translateY(0);
    transition: transform 200ms;

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(1px);
      border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default StyledNavigation;
