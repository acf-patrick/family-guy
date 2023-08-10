"use client";

import { darken } from "polished";
import styled from "styled-components";

const StyledContainer = styled.main`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes.maxWidthVariant};
  margin: auto;

  h2 {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  ul {
    list-style: none;
    padding: unset;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .head {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      text-transform: capitalize;
      font-size: 2.5rem;
      margin-bottom: unset;
    }

    ul {
      display: flex;
      gap: 1rem;
      font-size: 0.85rem;
    }

    li {
      padding: 0.5rem;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.quaternary};
      cursor: pointer;
      background: ${({ theme }) => theme.colors.tertiary};
      transition: background 300ms;

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.colors.tertiary)};
      }
    }
  }

  .images {
    display: grid;
    gap: 1rem;

    li {
      border-radius: 1rem;
      overflow: hidden;
    }

    img {
      transform: scale(1) rotate(0deg);
      transition: transform 500ms;

      &:hover {
        transform: scale(1.125) rotate(-5deg);
      }
    }

    @media (width>640px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .description {
    font-size: 0.95rem;
    line-height: 1.25rem;
    text-align: justify;
    color: ${({ theme }) => darken(0.2, theme.colors.primary)};
  }

  .quotes {
    display: grid;
    gap: 1.5rem;

    li {
      font-style: italic;
      padding: 0.85rem;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.colors.quaternary};
      border-left: 4px solid ${({ theme }) => theme.colors.tertiary};
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      cursor: default;
      color: ${({ theme }) => theme.colors.quinaryVariant};
      background: ${({ theme }) => theme.colors.secondary};
      transition: background 500ms;

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.colors.secondary)};
      }
    }
  }
`;

export default StyledContainer;
