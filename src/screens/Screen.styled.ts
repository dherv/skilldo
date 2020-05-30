import styled from "styled-components";

export const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
`;
