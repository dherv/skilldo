import styled from "styled-components";
import { device } from "../styled/media.queries.styled";

export const Container = styled.div`
  display: none;
  color: var(--text-color-light-grey);
  font-size: 8px;
  @media ${device.mobileM} {
    display: block;
  }
`;
