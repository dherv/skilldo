import styled from "styled-components";
import { device } from "../styled/media.queries.styled";

export const Container = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;
