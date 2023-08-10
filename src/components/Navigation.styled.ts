"use client";

import { styled } from "styled-components";
import { darken } from "polished";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.quinaryVariant};

  a:last-of-type {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.quinary};
    padding: 0.75rem 1rem;
    font-weight: bold;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: background 500ms;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme.colors.secondary)};
    }
  }
`;

export default StyledNavigation;
