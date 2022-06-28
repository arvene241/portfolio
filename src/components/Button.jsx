import React from "react";
import { Hover, StyledButton } from "../styles/components/ButtonStyle";

function Button({ link, text, icon, download }) {
  return (
    <>
      {download ? (
        <StyledButton href={link} target="_blank" rel="noreferrer" download>
          <Hover>
            {text}
            {icon}
          </Hover>
        </StyledButton>
      ) : (
        <StyledButton href={link}>
          <Hover>
            {text}
            {icon}
          </Hover>
        </StyledButton>
      )}
    </>
  );
}

export default Button;
