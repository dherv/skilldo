import { device } from "../styled/media.queries.styled";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 270px;
  width: 350px;
  margin-bottom: 4rem;
  margin-right: 4rem;
  @media ${device.tablet} {
  }
`;
