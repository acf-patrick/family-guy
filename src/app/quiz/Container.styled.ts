"use client";

import { keyframes, styled } from "styled-components";
import { lighten, darken } from "polished";

const bounce = keyframes`
  from {
    transform: translateX(-3px);
  } to {
    transform: translateX(3px);
  }
`;

const StyledContainer = styled.main`
  padding: 0 1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.sizes.maxWidthVariant};
  margin: auto;
  margin-top: 1rem;

  p {
    color: ${({ theme }) => lighten(0.1, theme.colors.secondary)};
    line-height: 1.5rem;
  }

  .wallpaper {
    position: relative;
    overflow: hidden;
    border-radius: 10px;

    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(to right, #000000bb, transparent);

      @media (max-width: 640px) {
        background: linear-gradient(to top, #000000d0, transparent);
      }
    }

    div {
      width: 480px;
      height: 100%;
      
      @media (max-width: 640px) {
        width: auto;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .body {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  .button {
    margin-top: 2rem;
    border: 2px solid ${({ theme }) => darken(0.1, theme.colors.secondary)};
    color: ${({ theme }) => darken(0.1, theme.colors.secondary)};
    display: block;
    width: 80%;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 7px;

    svg {
      font-size: 1.25rem;
    }

    &:hover {
      svg {
        animation: ${bounce} 500ms infinite alternate both;
      }
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;

    .body {
      width: auto;
    }
  }
`;

export default StyledContainer;
