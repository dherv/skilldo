import styled, { css } from "styled-components";

const HeadingMixin = css`
  font-size: 1.5rem;
  font-family: "Bangers", cursive;
  padding: 22px 0;
`;

export const Heading = {
  h1: styled.h1`
    ${HeadingMixin}
  `,
  h2: styled.h2`
    ${HeadingMixin}
  `,
  h3: styled.h3`
    ${HeadingMixin}
  `,
};
