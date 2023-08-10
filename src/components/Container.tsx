"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 0 auto;
`;

export default Container;
