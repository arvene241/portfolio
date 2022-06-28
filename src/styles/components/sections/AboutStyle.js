import styled from "styled-components";
import { Text } from "../../GlobalStyle";

export const BoldText = styled(Text)`
  font-weight: 500;
  margin-top: 35px;

  @media screen and (min-width: 428px) {
    margin-top: 45px;
  }
`;
