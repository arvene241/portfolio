import styled from "styled-components";
import { Container, Text, flex } from "../../GlobalStyle";

export const BoldText = styled(Text)`
  font-weight: 500;
`;

export const ContactContainer = styled(Container)`
  flex-direction: column;
  align-items: start;
  width: 100%;
`

export const ButtonContainer = styled.div`
  ${flex};
  margin-top: 40px;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 520px) {
    flex-direction: row;
  }
`
